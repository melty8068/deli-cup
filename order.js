const $ = id => document.getElementById(id);
const yen = n => n.toLocaleString('ja-JP') + '円';
const selectedPlan = () => DELI_CATALOG.plans.find(p => p.id === $('plan').value);
const selectedMain = () => DELI_CATALOG.mains.find(m => m.name === $('main').value);
const planLabel = p => p ? 'PLAN 0' + p.id + ' ' + p.name + '（' + p.boxes.join('＋') + '）' : '未選択';
const requested = new URLSearchParams(location.search).get('plan');
if (DELI_CATALOG.plans.some(p => p.id === requested)) $('plan').value = requested;
const today = new Date();
$('date').min = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
function update() {
  const p = selectedPlan(), m = selectedMain(), n = Number($('people').value);
  const valid = Number.isInteger(n) && n >= 4 && n <= 999;
  $('people').setCustomValidity(valid ? '' : '4〜999名の整数で指定してください。');
  $('sumPlan').textContent = planLabel(p);
  $('sumMain').textContent = m ? m.name : '未選択';
  $('sumPeople').textContent = valid ? n + '名' : '4〜999名を指定';
  $('sumDate').textContent = $('date').value || '未選択';
  $('sumReceive').textContent = $('receive').value || '未選択';
  $('sumPhoto').hidden = !p;
  if (p) { $('sumPhoto').src = p.photo; $('sumPhoto').alt = p.name + 'の参考イメージ'; }
  $('sumBase').textContent = !p ? '未選択' : n === 4 ? yen(p.price) : '人数に応じて要確認';
  $('sumExtra').textContent = !m || !valid ? '未選択' : n === 4 ? yen(m.extra * 4) : '要確認（参考単価 ' + yen(m.extra) + '／人）';
  $('sumTotal').textContent = !valid ? '人数を確認してください' : !p || !m ? 'プランとメインを選択' : n === 4 ? yen(p.price + m.extra * 4) : '要確認';
  $('priceNote').textContent = n === 4 ? '税込参考価格です。送料は未確定のため含みません。' : '4人前以外の価格・販売単位は未確定です。人数比例での合計計算は行っていません。';
  const delivery = $('receive').value === '配送希望';
  $('addressWrap').hidden = !delivery;
  $('address').required = delivery;
  document.querySelectorAll('[data-people]').forEach(b => b.classList.toggle('active', Number(b.dataset.people) === n));
  document.querySelectorAll('[data-main]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.main === $('main').value)));
  $('confirm').classList.remove('show');
}
$('orderForm').addEventListener('input', update);
$('orderForm').addEventListener('change', update);
document.querySelectorAll('[data-people]').forEach(b => b.addEventListener('click', () => { $('people').value = b.dataset.people; update(); }));
document.querySelectorAll('[data-main]').forEach(b => b.addEventListener('click', () => { $('main').value = b.dataset.main; update(); }));
$('orderForm').addEventListener('submit', e => {
  e.preventDefault();
  update();
  if (!$('orderForm').reportValidity()) return;
  $('confirm').textContent = '入力内容の確認（デモ）：' + planLabel(selectedPlan()) + '／' + $('main').value + '／' + $('people').value + '名／' + $('date').value + ' ' + $('time').value + '／' + $('receive').value + '。商品参考合計：' + $('sumTotal').textContent + '（送料別途未定）。実際の注文は送信・保存されていません。';
  $('confirm').classList.add('show');
  $('confirm').scrollIntoView({behavior:'smooth', block:'center'});
});
update();
