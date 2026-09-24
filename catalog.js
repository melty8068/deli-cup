// Shared product data. Prices are provisional, tax-inclusive, for four servings.
const DELI_CATALOG = {
  "plans": [
    {
      "id": "1",
      "name": "定番＆彩り",
      "boxes": [
        "A",
        "B"
      ],
      "price": 11000,
      "description": "親しみのある味と彩りを楽しむ、会社にも家庭にも選びやすい組み合わせ。",
      "photo": "images/plan1.png"
    },
    {
      "id": "2",
      "name": "定番＆満足",
      "boxes": [
        "A",
        "C"
      ],
      "price": 12200,
      "description": "なじみのあるおかずに食べごたえを。ゆっくり食事を楽しむ懇親会に。",
      "photo": "images/plan2.png"
    },
    {
      "id": "3",
      "name": "彩り＆満足",
      "boxes": [
        "B",
        "C"
      ],
      "price": 12400,
      "description": "華やかな見た目も、しっかりした満足感も。にぎやかな集まりに。",
      "photo": "images/plan3.png"
    },
    {
      "id": "4",
      "name": "定番＆上質",
      "boxes": [
        "A",
        "D"
      ],
      "price": 13100,
      "description": "親しみやすさに特別感を添えて。世代を問わず集まるお祝いの席に。",
      "photo": "images/plan4.png"
    },
    {
      "id": "5",
      "name": "彩り＆上質",
      "boxes": [
        "B",
        "D"
      ],
      "price": 13300,
      "description": "彩り豊かなデリと華やかな一箱。誕生日や記念日のテーブルに。",
      "photo": "images/plan5.png"
    },
    {
      "id": "6",
      "name": "満足＆上質",
      "boxes": [
        "C",
        "D"
      ],
      "price": 14500,
      "description": "食べごたえと特別感を楽しむ組み合わせ。大切な人との集まりに。",
      "photo": "images/plan6.png"
    }
  ],
  "boxes": {
    "A": {
      "name": "親しみ",
      "items": [
        "若鶏のカチャトーラ",
        "ホタテフライ",
        "焼売ポン酢ジュレ",
        "紅芋コロッケ",
        "杏仁豆腐"
      ]
    },
    "B": {
      "name": "彩り",
      "items": [
        "トマト冷製パスタ",
        "イカと青梗菜の塩ダレ",
        "八幡巻き",
        "かぼちゃサラダ",
        "インカのめざめ"
      ]
    },
    "C": {
      "name": "満足感",
      "items": [
        "ボロネーゼとナスのリガトーニ",
        "エビマヨ",
        "合鴨ロースト",
        "鶏むね明太チーズフライ",
        "ガトー＋マンゴー"
      ]
    },
    "D": {
      "name": "上質",
      "items": [
        "生ハムカプレーゼ",
        "エビチリ",
        "ローストビーフ",
        "パテドカンパーニュ",
        "出汁巻玉子（カニあん）"
      ]
    }
  },
  "mains": [
    {
      "name": "パオ",
      "detail": "三枚肉2枚・標準メイン",
      "extra": 0,
      "photo": "images/main-pao.webp"
    },
    {
      "name": "タコライス",
      "detail": "追加なしで変更できます",
      "extra": 0,
      "photo": "images/main-taco.webp"
    },
    {
      "name": "ミニバーガー",
      "detail": "＋500円／人",
      "extra": 500,
      "photo": "images/main-burger.webp"
    },
    {
      "name": "手まり寿司",
      "detail": "4個・＋650円／人",
      "extra": 650,
      "photo": "images/main-sushi.webp"
    }
  ]
};
