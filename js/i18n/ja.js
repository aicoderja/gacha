/** @type {typeof i18nDefault} */
i18nStrings.ja = {
    /** Name of the language, in that language. Don't translate the word "English" to your language. */
    name: "日本語",
    /** The number notation to use as the default with the language. */
    notation: "common",
    /** The primary verb. See `verb` for more info. */
    primaryVerb: "draw",

    /** 
     * A list of verbs for the player to choose from. Each verb contains a list of forms
     * that are used to be inserted into strings. 
     * 
     * For example: In English, `"free {draws}"` can be replaced into "free draws", "free pulls",
     * or "free summons" based on the verb the player selected in Settings.
     * 
     * You can declare as much verb forms as your language needs.
     * 
     * `_anim` is used to determine per-verb special card opening animation. For example: `_anim: "spin"`
     * makes the card pack spin while it is opened and should be used on verbs that are near in meaning
     * to the word "spin".
     * 
     * `_equiv` declares a verb's equivalent verb in English and is used to determine which verb to change to
     * when the player changes the game's language.
     * 
     * @type {{[verb: string]: { _equiv?: string, _anim?: string, [form: string]: string }}} 
    */
    verbs: {
        draw: {
            draw: "引く",
            draws: "引く",
            drew: "引いた",
            drawn: "引かれた",
            drawing: "引いている",
        },
        pull: {
            draw: "引っ張る",
            draws: "引っ張る",
            drew: "引っ張った",
            drawn: "引っ張られた",
            drawing: "引っ張っている",
        },
        summon: {
            draw: "召喚する",
            draws: "召喚する",
            drew: "召喚した",
            drawn: "召喚された",
            drawing: "召喚している",
        },
        roll: {
            _anim: "spin",
            draw: "回す",
            draws: "回す",
            drew: "回した",
            drawn: "回された",
            drawing: "回している",
        },
        spin: {
            _anim: "spin",
            draw: "回転させる",
            draws: "回転させる",
            drew: "回転させた",
            drawn: "回転させられた",
            drawing: "回転している",
        },
        gacha: {
            draw: "ガチャる",
            draws: "ガチャる",
            drew: "ガチャった",
            drawn: "ガチャられた",
            drawing: "ガチャしている",
        }
    },

    /** 
     * Common or uncategorized strings.
    */
    common: {
        title: "一兆回無料 {Draws}",
        title_rich: "<span class='number'>一兆回</span>無料 {Draws}",

        draw: "{Draw}",
        draw_inCooldown: "クールダウン中",
        draw_outOfDraws: "{draws}がありません…",
        switch: {
            no: "属性なしに切り替え",
            fire: "火属性に切り替え",
            water: "水属性に切り替え",
            leaf: "葉属性に切り替え",
            sun: "太陽属性に切り替え",
            moon: "月属性に切り替え",
        },
        skills: {
            active: "アクティブ",
        },

        new: "新着!",

        hint_title: "{0} 個の無料{draws}があります！",
        hint_desc: "下の大きな「{Draw}」ボタンをクリックして{drawing}を始めましょう！",
        hint_ios_title: "最適な体験のため：",
        hint_ios_desc: "{0} を押し -> 「ホーム画面に追加」-> 「追加」",
    },

    /** 
     * Strings for notification popups
    */
    notifs: {
        badge_earn: "バッジ獲得：",
        music_needsInteract: "どこかをクリックしてBGMを有効にしてください",
    },

    /** 
     * Strings related to formatting.
    */
    format: {
        joiner: {
            currency: "{0} {1}",
        },
        marks: {
            quote: "「{0}」",
        },
        skill: {
            cooldown: "クールダウン: {0}"
        },
        time: {
            second: "{0}秒",
            minute: "{0}分",
            hour: "{0}時間",
            day: "{0}日",
            joiner: "{1} {0}",
        },
        chance: {
            fraction: "{1}中の{0}回の確率",
            percent: "{0}%"
        }
    },

    /** 
     * Strings related to tabs' contents.
    */
    tabs: {
        common: {
            strings: {
                nothing: "ここには何もないようです…",
            }
        },
        collection: {
            name: "コレクション",
            filters: {
                type: {
                    regular: "通常",
                    legacy: "レガシー",
                },
                rarity: {
                    any: "全てのレアリティ",
                    n: "<rarity rarity='n'></rarity> カード", 
                    r: "<rarity rarity='r'></rarity> カード", 
                    sr: "<rarity rarity='sr'></rarity> カード", 
                    ssr: "<rarity rarity='ssr'></rarity> カード", 
                    ur: "<rarity rarity='ur'></rarity> カード",
                    ex: "<rarity rarity='ex'></rarity> カード",
                },
                faction: {
                    any: "全ての属性", 
                    none: "属性なし",
                    fire: "火属性", 
                    water: "水属性", 
                    leaf: "葉属性", 
                    sun: "太陽属性", 
                    moon: "月属性",
                },
                pickit: {
                    off: "pick-it Premium を無効にする",
                    on: "アップグレード可能なカードを表示",
                },
                iris: {
                    info1: "irisVision によって提供された数値がここに表示されます：",
                    infoInHand: "左の数字はコレクション内のユニークなカード差分の数を示します。",
                    infoInPool: "中央の数字は、ドロープールに入る条件を満たすユニークなカード差分の数を示します。",
                    infoInGame: "右の数字は現在のゲームランで利用できるユニークなカード差分の数を示します。",
                    info2: "カードフィルターを使ってこれらの数値に影響を与え、まだ発見されていないカードを入手するための行動を推測できます。",
                },
            }
        },
        marketplace: {
            name: "マーケットプレイス",
            subtabs: {
                meta: "オンラインマーケットプレイス",
                ingame: "ゲーム内ショップ",
            },
            headers: {
                accountMarket: "アカウントマーケットプレイス",
                exCards: "<rarity rarity='ex'></rarity> カード",
                boosterPacks: "ブースターパック",
                cinema: "絶対シネマ",
            },
            strings: {
                sellAccount: "アカウント買取サービス",
                sellAccount_desc: "当社はガチャゲームのアカウントを高価で買い取ります！",
                sellAccount_gain: "あなたが得るもの：",
                sellAccount_gain_money: "{0}<br>マネー",
                sellAccount_gain_exp: "{0}<br>経験値",
                sellAccount_req: "{0} のカード {drawn} が必要",
                sellAccount_action: "アカウントを売る！",
                sellAccount_actionLocked: "ロック中",

                ad_title: "「広告」ブースター",
                ad_effects: {
                    points_draw: "「広告」を視聴して、次の{1} {draws}で{ x0:1 }分のポイントを追加で獲得！",
                    shreds_draw: "“Watch” an “ad” and gain {x0:1} more shreds for the next {1} {draws}!",
                    faction_draw: "“Watch” an “ad” and gain {x0:1} more faction power for the next {1} {draws}!",
                    energy_time: "“Watch” an “ad” and gain passive Bulk Energy {x0:1} faster for {1s}!",
                },
                ad_cooldown: "新しい「広告」は{0}で利用可能になります",
                ad_action: "「広告」を視聴する",
                ad_actionCooldown: "クールダウン中",
                ad_reroll: "オファーを再抽選",
            },
        },
        infobook: {
            name: "インフォブック",
            subtabs: {
                stats: "統計",
                breakdown: "内訳",
                gallery: "ギャラリー",
            },
            strings: {
                badges: "バッジ",
                story: "ストーリー",
            }
        },
        options: {
            name: "オプション",
            subtabs: {
                prefs: "設定",
                saves: "保存",
                other: "その他"
            },
            headers: {
                prefs: {
                    i18n: "ローカライズとデータ表示",
                    logic: "ゲーム挙動",
                    video: "表示とユーザーインターフェース",
                    audio: "オーディオ"
                },
                saves: {
                    storage: "保存"
                },
                other: {
                    info: "情報",
                    bonus: "ボーナス"
                },
            },
            items: {
                language: "言語",
                updateRate: "更新頻度",
                confirm: "確認",
                notation: "数字表記",
                verb: "動詞",
                cardImages: "カード画像",
                cardSize: "カードサイズ",
                musicVolume: "BGM 音量",
                localSave: "ローカルセーブ",
                cloudSave: "クラウドセーブ",
                info: "情報",
                otherOther: "その他",
            },
            values: {
                updateRate: {
                    auto: "自動",
                    perSec: "{0} TPS",
                },
                items: {
                    showConfirms: "確認設定を表示",
                    manualSave: "手動保存",
                    importExport: "セーブのインポート/エクスポート",
                    hardReset: "ハードリセット",
                    checkSaves: "セーブを確認",
                    about: "概要とクレジット", 
                    john: "johnvertisement",
                },
                common: {
                    hidden: "非表示",
                    shown: "表示",
                    disabled: "無効",
                    enabled: "有効",
                },
                notation: {
                    default: "既定",
                    common: "一般",
                    scientific: "指数表記",
                    engineering: "工学表記",
                    si: "SI接頭辞",
                    alphabet: "アルファベット",
                    chinese: "中国式",
                    korean: "韓国式",
                }
            },
            strings: {
                save_recent: "(ゲームを保存しました)",
                save_timer: "(最後の保存: {0} 前)",

                cloud_type_galaxy: "(galaxy に接続済み)",
                cloud_loggedOut: "(ログアウトしました)",
                cloud_status_saving: "(保存中...)",
                cloud_status_loading: "(読み込み中...)",
                cloud_status_checking: "(確認中...)",

                language_desc: "英語以外の言語は100%完成または正確でない場合があります。",
                notation_desc: "ゲーム内の大きな数の表記を変更します。既定の表記は現在の言語に基づきます。",
                verb_desc: "ゲームタイトルやアイテム説明などで{drawing}カードに関連付けられる動詞を変更します。",
                john_note: "(注: リンクはこのタブで開きます。誤ってゲームを閉じないよう Ctrl+クリックしてください)",
            },
            popups: {
                confirm: {
                    title: "確認設定",
                    desc: "確認を求める：",
                    types: {
                        sellAccount: "アカウントを売るとき",
                    }
                }
            }
        },
    },

    /** 
     * Strings related to popups or tooltips' contents.
    */
    popups: {
        common: {
            title_error: "エラー",

            desc_error: "エラーが発生しました: {0}",
            desc_pleaseWait: "お待ちください。",

            action_continue: "続行",
            action_close: "閉じる",
            action_reload: "再読み込み",
        },
        draw: {
            strings: {
                brand: "DTCGco.™",
                brand_full: "© DUDUCAT TRADING CARD GAME CO.",
                pack_title: "OMEGA CARDS",
                pack_subtitle: "TRADING CARD GAME",
                pack_count: "{0} 枚入りパック",
            },
        },
        drawLegacy: {
            title: "Pick {0}",
        },
        currency: {
            strings: {
                amount_have: "(所持: {0})",
                amount_drawn: "({drawn}した数: {0})",
                speed_minute: "({0}/分)",
                toCap: "(上限まであと {0})",
                efficiency: "({0} 効率)",
            }
        },
        confirm: {
            sellAccount: {
                title: "本当にアカウントを売りますか？",
                desc1: "新しいゲームアカウントでやり直しますが、パフォーマンスに応じて<b>マネー</b>と<b>経験値</b>を獲得します。",
                desc2: "<strong>買い戻しはできません</strong>—アカウントを売るとゲームはセーブします！",
                confirm: "次回アカウントを売る際に確認する",

                list_lose: "失うもの：",
                list_lose1: "通常のカードコレクション",
                list_lose2: "ポイント、シュレッド、属性通貨",
                list_lose3: "スキルと使用統計",

                list_gain: "得るもの：",
                list_gainMoney: "{0} マネー",
                list_gainExp: "{0} 経験値",

                action_no: "いいえ、戻る",
                action_yes: "はい、アカウントを売る",
            },
        },
        card: {
            factions: {
                fire: "(火属性)", 
                water: "(水属性)", 
                leaf: "(葉属性)", 
                sun: "(太陽属性)", 
                moon: "(月属性)", 
            },
            strings: {
                copies: "({0} 枚の追加コピー)",
                stars: "({0} スター)",
                crown: "(王冠付きカード)",
                level: "(レベル {0})",
                notOwned: "(未所持のカード)",

                level_title: "強化",
                level_cost: "強化費用：",
                level_cant: "このカードは強化できません。",
                level_cant_max: "最大レベルに達しました。",
                level_cant_cost: "{0} が不十分です。",
                level_prompt: "クリックして強化する。",
                level_button: "強化",
                level_button_cant: "強化不可",
                level_button_max: "最大レベルに達しました",

                star_title: "合成",
                star_cost: "合成費用：",
                star_cost_copies: "「{0}」 追加コピー",
                star_cant: "このカードは合成できません。",
                star_cant_max: "最大スターに達しました。",
                star_cant_cost: "コピーが不足しています。",
                star_prompt: "クリックして合成する。",
                star_button: "合成",
                star_button_cant: "合成不可",
                star_button_max: "最大スターに達しました",

                buy_cost: "購入費用：",
                buy_prompt: "クリックして購入する。",
                buy_button: "購入",
                buy_button_cant: "購入不可",

                legacyDraw_prompt: "このカードを選択するにはクリックしてください。",
                legacyDraw_button: "選択",
            }
        },
        skill: {
            strings: {
                skill: "(スキル)",
                skill_locked: "このスキルはロックされています",

                action_activate: "発動",
                action_activated: "発動済み",
                action_inCooldown: "クールダウン中 ({0})"
            }
        },
        pack: {
            buy_confirm: "「{0}」を購入しますか？",
            perks: "このブースターパックには以下が含まれます：",
            
            buy_action_no: "いいえ、戻る",
            buy_action_yes: "{0}で購入",

            strings: {
                pack: "(ブースターパック)",
            }
        },
        buff: {
            strings: {
                buff: "(バフ)",
            }
        },
        ad: {
            strings: {
                sponsored: ["「スポンサード」", "「プロモート」", "「広告」"],
                taunts: {
                    generic: [
                        "このレベルをクリアすると広告を早く終わらせられます",
                        "ピンクの色に届かない",
                        "ピンク色を達成するために魂を売った",
                        "とてもリラックスできるゲーム！",
                        "見た目より難しい",
                        "あなた："
                    ],
                    puzzle: [
                        "If you complete this puzzle, you're legally skilled",
                        "If you solve this puzzle, you're legally allowed to close this ad early",
                        "I don't think you can complete this puzzle",
                        "I bet you can't solve this puzzle",
                        "Can you solve this puzzle?",
                        "I sold my soul to complete this puzzle",
                    ],
                    completed: [
                        "やった！",
                        "すごい！",
                        "おめでとう！",
                    ],
                }
            },
            action_close: "「広告」を閉じる",
            action_closeIn: "{0}で閉じる",
        },
        badge: {
            strings: {
                state_obtained: "(バッジ獲得)",
                state_locked: "(ロックされたバッジ)",

                lock_desc: "？？？",
            }
        },
        slideshow: {
            strings: {
                action_skip: "全部読む気はない",
                action_next: "次へ",
            }
        },
        save: {
            ie_title: "セーブのインポート/エクスポート",
            ie_desc1: "下のテキストボックスにセーブデータが入っています。セーブをコピーして安全な場所に保管してください。",
            ie_desc2: "または、セーブを貼り付けて「テキストボックスからインポート」を押してロードします。",
            ie_action_save_text: "クリップボードにコピー",
            ie_action_save_file: "ファイルをダウンロード",
            ie_action_load_text: "テキストボックスからインポート",
            ie_action_load_file: "ファイルをアップロード",

            saved_title: "ゲームを保存しました",
            saved_desc: "このタブを閉じても安全です。",
            saved_noteLocal: "(注: このゲームは最後の保存から1分後や、{draw}後や設定変更時など特定のイベントで自動保存します)",
            saved_noteCloud: "(注: このゲームは最後のクラウド保存から5分後にクラウドへ自動保存します)",
            saved_text_title: "セーブをコピーしました",
            saved_text_desc: "セーブデータをクリップボードにコピーしました。",
            saved_file_title: "セーブをダウンロードしています...",
            saved_file_desc: "セーブデータを「{0}」としてダウンロードしています...",

            import_error: "無効なセーブ",
            import_error_desc: "このセーブは不正または破損している可能性があります。セーブ文字列が全てコピーされており省略されていないことを確認してください。",
            import_error_desc_ellipsis: "セーブ文字列に省略記号が検出されました。ブラウザやOSによってセーブが切り詰められている可能性があります。より確実なバックアップのためにファイルのダウンロードを使用してください。",

            import_confirm_title: "このセーブをインポートしますか？",
            import_confirm_desc: "このセーブをインポートしますか？現在のゲームは上書きされます！",
            import_confirm_cloudcheck_title: "古いクラウドセーブ",
            import_confirm_cloudcheck_desc: "クラウド上のセーブは現在のローカルセーブより古いようです。クラウドセーブをインポートしますか？",
            import_confirm_cloudavail_title: "クラウドセーブが利用可能です！",
            import_confirm_cloudavail_desc: "クラウドセーブがあります。インポートしますか？",
            import_confirm_action_no: "いいえ、戻る",
            import_confirm_action_yes: "はい、セーブをインポート",

            reset_confirm_title: "本当にハードリセットしますか？",
            reset_confirm_desc1: "この操作は<strong>セーブを完全に消去します。</strong>ボーナスは一切戻りません。ゲーム開始時点に戻ります。",
            reset_confirm_desc2: "この操作のために現在のセーブデータはクリップボードにコピーされます。",
            reset_confirm_action_no: "いいえ、戻る",
            reset_confirm_action_yes: "はい、ハードリセットする",

            busy_saving_cloud: "クラウドに保存中...",
            busy_import: "セーブをインポート中...",
            busy_reset: "ハードリセット中...",
            busy_desc: "(ゲームはまもなく再読み込みされます。処理中はゲームを閉じないでください)",

            error_cloudSaveCooldown: "クラウドセーブ間は30秒お待ちください。",
            error_cloudCheckCooldown: "クラウドセーブ確認間は30秒お待ちください。",
            error_copy1: "セーブ文字列をクリップボードにコピーしようとしてエラーが発生しました。",
            error_copy2: "テキストボックスから手動でセーブ文字列を全選択してコピーすることもできます。",
            error_loggedOut: "ログインしていません。クラウドセーブ機能を使用するにはログインしてください。",

            opt_keepPrefs: "設定を保持する",
            opt_keepPrefs_noteReset: "(注: 解放要素に紐づく設定はデフォルトにリセットされます)",
            opt_keepPrefs_noteImport: "(注: 新しいセーブに該当の解放要素がない場合、紐づく設定はデフォルトにリセットされます)",
        },
        about: {
            blabs: [
                "(無料{draw}数を膨らませずにはいられないから)",
                "(無料{draw}数を宣伝せずにはいられないから)",
                "(ダウンロード不要、最先端のウェブ技術で作られたゲーム)",
                "(可能な限り寛大なガチャゲーム)",
                "(千くらいが多すぎると思ったあなたへ)",
                "<marquee>(見て、お母さん、&lt;marquee&gt; タグに入ってるよ！)</marquee>",
                "(本当にバルクタスティックなゲーム)",
            ],
            strings: {
                game: "{0} によるゲーム",
                openSource: "このゲームは <b>MIT ライセンス</b> の下で配布されています",
                viewLicense: "ライセンスを見る",
                viewSource: "ソースコードを見る",
                libs: "使用ライブラリ：",
                music: "音楽: {0}",
                music_foot: "(それ私です)",
                icons: "様々なソースのアイコン（提供: {0}）",
                footer: "(このゲームはパロディとしてフェアユースに該当する？<br>分かりません、私は弁護士ではありません)",
                thanks: "特別感謝：",
                thanks1: "あの数々のモバイルゲーム広告",
                thanks1_foot: "(インスピレーションのため)",
            }
        },
        endgame: {
            title: "おめでとうございます",
            strings: {
                body1: "全てのバッジを取得し、エンドゲームに到達しました！次のコンテンツ更新をお楽しみに！",
                body2: "その間、{0} するか、アカウントをグラインドし続けることができます。",
                body2_link0: "他の作品を見る",
                time: "総プレイ時間: {0}",
            }
        },
        offline: {
            title: "おかえりなさい！",
            desc_time: "{0} 間離れていました。",
            desc_timeReduced: "(オフライン進行は {0} に短縮されました)",
            desc_event: "離席中の出来事：",
            events: {
                nothing: "特に面白いことは起きませんでした…",
                energy: "バルクエネルギーが {0} から {1} に変化しました",
                cooldown: "{Draw} のクールダウンが {0} から {1} に変化しました",
                skillCooldown: "「{0}」のクールダウンが {1} から {2} に変化しました",
                skillStack: "「{0}」のスタックが {1} から {2} に変化しました",
                pickitTime: "pick-it 時間が {0} から {1} に変化しました",
                adCooldown: "「広告」ブースターのクールダウンが {0} から {1} に変化しました",
            }
        },
        sell: {
            decor: {
                username: "ユーザー名",
                password: "パスワード",
                accountSelling: "アカウント売却中...",
                accountSold: "アカウントが売却されました。",
                accountNew: "新しいアカウントを作成中...",
                accountLogIn: "ログイン中...",
            },
        },
        sellResult: {
            title: "アカウント概要",
            pointHeaders: {
                obtained: "獲得",
            },
            points: {
                money: "{0} マネー",
                exp: "{0} 経験値",
                legacyDraw: "{0} レガシーカード",
            },
            action_continue: "新しいアカウントを作成",
        },
        complete: {
            strings: {
                title: "ゲーム完了！",
                line1: "あなたは一兆の無料{draws}を全部使い切りました！",
                line2: "完了までにかかった時間: {0}",
                line3: "とりあえずこれで終わりです。アップデートを待つか、設定 -> ハードリセットで再プレイできます。",
            }
        },
    },

    /** 
     * Strings related to currencies, such as their names or quote texts.
    */
    currencies: {
        cards: {
            name: "カード",
            left: "残りカード",
            quote: "オメガカードのために作られたこれらのカードは、実際にはさらに{draw}するためにお金を使わせるためのバウチャーです…少なくとも一兆の無料{draws}を使い切った後に。彼らは無料{draws}を大量に配ることに大喜びしているのです。",
        },
        energy: {
            name: "バルクエネルギー",
            quote: "複数のカード{draws}をまとめて交換するためのロイヤリティ通貨として使用されます。",
        },
        points: {
            name: "ポイント",
            quote: "世界で最も一般的な通貨。あらゆる用途に割り当てられるほど汎用的です。",
        },
        shreds: {
            name: "シュレッド",
            quote: "余剰カードの残骸を原子レベルにしたもの。ほとんど取引価値はありません（<rarity rarity='ex'></rarity> カードを除く）ので、人々はそれらを新しいアップグレード通貨として使用するためにシュレッダーにかけるなどの新しい使い方を考え出しています。",
        },
        fire: {
            name: "Fire Power",
            quote: "Power from the fire faction. Some consider discovering this humans' greatest achievement",
        },
        water: {
            name: "Water Power",
            quote: "Power from the water faction. Always reminds you to keep yourself hydrated",
        },
        leaf: {
            name: "Leaf Power",
            quote: "Power from the leaf faction. You feel yourself to be one with nature",
        },
        sun: {
            name: "Sun Power",
            quote: "Power from the sun faction. Also believed to also have the power to control air",
        },
        moon: {
            name: "Moon Power",
            quote: "Power from the moon faction. Also believed to also have the power to control earth",
        },

        money: {
            name: "Money",
            quote: "It's like the world's most generic currency, but actually usable in real life! Just about anything that has value in real life also has money's involvement!... Price inflation and the reduction of buying power? What's that?",
        },
        exp: {
            name: "Experience",
            quote: "The amount of knowledge you have gathered by playing gacha games. We planned on making it more realistic by relying on you actually learning every bit of nuances of the games but everything in the world has been so gamified with incremental game mechanics even this kind of stuff are now treated as a tangible, measurable, and consumable currency",
        },
    },

    /** 
     * Strings related to cards, such as their names or quote texts.
    */
    cards: {
        standard: {
            n: {
                n0: {
                    name: "報酬なし？",
                    desc: "効果なし。",
                    quote: "99%の確率で選ばれるようにプログラムされた選択肢"
                },
                n1: {
                    name: "一点",
                    desc: "{draw}ごとに{+0}ポイント獲得。",
                    quote: "ここにいる"
                },
                n2: {
                    name: "半点",
                    desc: "{draw}ごとに0～{+0}ポイントをランダム獲得。",
                    quote: "半点とは何か説明するには、並行宇宙の話をしなければならない―"
                },
                n3: {
                    name: "カードパック",
                    desc: "基本バルク{+0}。バルク値が高いほど一度に{draws}できる枚数が増加。",
                    quote: "一兆回の{draws}を使い切るには、一度に複数枚{drawing}する必要があるよね？"
                },
                n4: {
                    name: "自動充填パック",
                    desc: "バルクパワー{+0}。バルクパワーはバルクエネルギーを自動生成。",
                    quote: "インクリメンタルゲーム、別名放置ゲーム"
                },
                n5: {
                    name: "大きな包装",
                    desc: "バルクエネルギー上限{+0}。上限を超えると生産量が減少。",
                    quote: "今度こそ本当に放置できる"
                },
                n6: {
                    name: "ハサミ",
                    desc: "パック開封速度{+0%}アップ。",
                    quote: "開封中にパックをクリックすると早く割れることに気づいた？"
                },
                n7: {
                    name: "高速配送",
                    desc: "パックのクールダウン速度{+0%}アップ。",
                    quote: "新しい高速配送サービスで補充も速い！1枚以上の注文すべてに適用"
                },
                c1: {
                    name: "ゲーム内ショップ",
                    desc: "マーケットプレイスをアンロックします。",
                    quote: "{drawing}では手に入らないカードを探し、最高額入札者に勝つために全財産を使うことになるかも"
                }
            },
            r: {
                n0: {
                    name: "超絶シュレッダー",
                    desc: "シュレッド倍率{+0%}アップ。",
                    quote: "オフィス用の小型シュレッダーではなく、ネットでASMR動画用に使われる業務用シュレッダーを使ってみては？"
                },
                n0b: {
                    name: "驚異のシュレッドタイム",
                    desc: "シュレッド倍率{+0%}アップ。",
                    quote: "ネットでは物が粉々になる様子を見るのが人気！自分の超絶シュレッダーでカードを粉砕してPipeTubeにアップすれば広告収入もゲットできるかも"
                },
                n1: {
                    name: "ポイント倍率",
                    desc: "ポイント倍率{+0%}アップ。",
                    quote: "インクリメンタルゲームには指数成長が必須。汎用通貨には倍率アップグレードが必要"
                },
                n1b: {
                    name: "ポイントプレス",
                    desc: "ポイント倍率{+0%}アップ。",
                    quote: "シュレッドを圧縮してポイントに変換。実は合法ポイントもこうして作られているので違いは分からないはず"
                },
                n2: {
                    name: "分厚いカードパック",
                    desc: "基本バルク{+0%}アップ、ただしクールダウン{+1%}増加。",
                    quote: "分厚いほど良い"
                },
                n3: {
                    name: "カード開封工場",
                    desc: "バルクパワー{+0%}アップ、ただしクールダウン{+1%}増加。",
                    quote: "大量のカード開封機を生産"
                },
                n3b: {
                    name: "リサイクル",
                    desc: "バルクパワー{+0%}アップ。",
                    quote: "カードを再利用してさらにカードを開封するのは実は良いアイデア"
                },
                n3c: {
                    name: "コンポスター",
                    desc: "バルクエネルギー上限{+0%}アップ。",
                    quote: "大量のカードを処理できるコンポスターでさらにリサイクル"
                },
                n4: {
                    name: "持久力トレーニング",
                    desc: "カード倍率{+0%}アップ、ただしクールダウンと開封時間{+1%}増加。",
                    quote: "カードパックが持久力トレーニングを受けた！割るのは難しくなったが中身は増量！"
                },
                n4b: {
                    name: "フリップアタック",
                    desc: "カード公開速度{+0%}アップ。",
                    quote: "リバースカード、ブロック、ドロー4"
                },
                n5a: {
                    name: "トレンド",
                    desc: "基本火属性パワー{+0}獲得。",
                    quote: "あっ、<br>熱い、<br>…熱い"
                },
                n5b: {
                    name: "オーシャン",
                    desc: "基本水属性パワー{+0}獲得。",
                    quote: "アイムブルー ダビディダビダイ"
                },
                n5c: {
                    name: "フォレスト",
                    desc: "基本葉属性パワー{+0}獲得。",
                    quote: "チームツリー最高"
                },
                n5d: {
                    name: "エアー",
                    desc: "基本太陽属性パワー{+0}獲得。",
                    quote: "息を感じて"
                },
                n5e: {
                    name: "アース",
                    desc: "基本月属性パワー{+0}獲得。",
                    quote: "ここが私たちの家"
                },
                n6a: {
                    name: "バター味ポップコーン",
                    desc: "「広告」ブースターによる基本ポイントブースト{+0:1}。",
                    quote: "えっ、広告を見るのが好きな人がいるの!?"
                },
                n6b: {
                    name: "キャラメルポップコーン",
                    desc: "「広告」ブースターによる基本シュレッドブースト{+0:1}。",
                    quote: "甘い味は広告収入にもぴったり"
                },
                n6c: {
                    name: "チョコレートポップコーン",
                    desc: "「広告」ブースターによる基本属性パワーブースト{+0:1}。",
                    quote: "ダーティな味はダーティなマネーにぴったり"
                },
                c1: {
                    name: "システム2",
                    desc: "インフォブックをアンロックします。統計などを閲覧できます（ただし代償あり）。",
                    quote: "えーっと、実は…🤓"
                }
            },
            sr: {
                n0: {
                    name: "完全に汎用なカード",
                    desc: "ポイント倍率{+0%}アップ。",
                    quote: "完全に汎用なカードが完全に汎用な通貨を強化し、汎用性が完璧すぎて手に負えない"
                },
                n1: {
                    name: "二点セット",
                    desc: "<b><rarity rarity='n'></rarity> 一点</b>の効果レベルを{^0:1}上昇。",
                    quote: "これが線と呼ばれるもの"
                },
                n2: {
                    name: "ダイス抽出器",
                    desc: "<b><rarity rarity='n'></rarity> 半点</b>の効果レベルを{^0:1}上昇。",
                    quote: "サイコロの目に導かれよ"
                },
                n3: {
                    name: "カード倉庫",
                    desc: "バルクエネルギー上限{+0%}アップ。",
                    quote: "このペースだとカードを保管するためにもっと広い部屋が必要になる"
                },
                n4a: {
                    name: "火属性マスタリー",
                    desc: "火属性・葉属性・ポイント獲得量{+0%}アップ。",
                    quote: "この<rarity rarity='sr'></rarity>カードの説明文は本当にコピペです。どのガチャゲームもいつもやってるでしょ？"
                },
                n4b: {
                    name: "水属性マスタリー",
                    desc: "水属性・火属性・ポイント獲得量{+0%}アップ。",
                    quote: "この<rarity rarity='sr'></rarity>カードの説明文は本当にコピペです。どのガチャゲームもいつもやってるでしょ？"
                },
                n4c: {
                    name: "葉属性マスタリー",
                    desc: "葉属性・水属性・ポイント獲得量{+0%}アップ。",
                    quote: "この<rarity rarity='sr'></rarity>カードの説明文は本当にコピペです。どのガチャゲームもいつもやってるでしょ？"
                },
                n4d: {
                    name: "太陽属性マスタリー",
                    desc: "太陽属性・月属性・ポイント獲得量{+0%}アップ。",
                    quote: "この<rarity rarity='sr'></rarity>カードの説明文は本当にコピペです。どのガチャゲームもいつもやってるでしょ？"
                },
                n4e: {
                    name: "月属性マスタリー",
                    desc: "月属性・太陽属性・ポイント獲得量{+0%}アップ。",
                    quote: "この<rarity rarity='sr'></rarity>カードの説明文は本当にコピペです。どのガチャゲームもいつもやってるでしょ？"
                },
                n5a: {
                    name: "ラピッドファイア",
                    desc: "<b>Burst</b>のクールダウン{/0:2}短縮。",
                    quote: "もっと火力が必要だ"
                },
                n5b: {
                    name: "ディープフリーズ",
                    desc: "<b>Freeze Drop</b>のクールダウン{/0:2}短縮。",
                    quote: "ほぼ絶対零度"
                },
                n5c: {
                    name: "NPK",
                    desc: "<b>Fertilizer</b>のクールダウン{/0:2}短縮。",
                    quote: "一つだけでなく全部やればいいじゃない？"
                },
                n5d: {
                    name: "サマー",
                    desc: "<b>Photosynthesis</b>のクールダウン{/0:2}短縮。",
                    quote: "水着回はありません"
                },
                n5e: {
                    name: "カレッジ",
                    desc: "<b>Simplification</b>のクールダウン{/0:2}短縮。",
                    quote: "学生にクリティカルシンキングを教える"
                },
                n6a: {
                    name: "広告頻度減少",
                    desc: "「広告」ブースターのドロー回数バフが{0%}長持ち。",
                    quote: "広告をスパムしすぎると逆効果でプレイヤーが離れるらしい。頻度を減らしてみようか？"
                },
                n6b: {
                    name: "広告ブースト延長",
                    desc: "「広告」ブースターの時間バフが{0%}長持ち。",
                    quote: "10秒広告でブーストするゲームからも収益化できるようになった"
                },
                c1: {
                    name: "pick-it",
                    desc: "いくつかの条件でカードをフィルタする機能をアンロックします。",
                    quote: "pick-it™であらゆる条件でカードをソート・フィルタ可能！…ただし人気順ソートは月額課金が必要"
                }
            },
            ssr: {
                n0: {
                    name: "ラストスパート",
                    desc: "カード倍率{+0%}アップ。",
                    quote: "ドローの半分（対数的に）まで到達！気に入ったら高評価＆チャンネル登録よろしく！"
                },
                n0b: {
                    name: "スクラップ",
                    desc: "<rarity rarity='r'></rarity>以上のカードからシュレッド{x0}獲得。",
                    quote: "ガーガー"
                },
                n0c: {
                    name: "黄鉄鉱",
                    desc: "<rarity rarity='sr'></rarity>以上のカードからシュレッド{x0}獲得。",
                    quote: "“偽物の金”でも<rarity rarity='sr'></rarity>カードの材料には使える"
                },
                n0d: {
                    name: "ダイヤモンド",
                    desc: "<rarity rarity='ssr'></rarity>以上のカードからシュレッド{x0}獲得。",
                    quote: "ダイヤは実は結構ありふれている。石炭から合成する方法もあるが、装置が高価なので富豪の道楽扱い"
                },
                n1a: {
                    name: "ギャラクシー",
                    desc: "コレクション内のスター総数（王冠カードは{0}スター換算）に応じてポイント増加。<br>（現在: {1}スター ⇒ {+2%}ポイント増加）",
                    quote: "遠い銀河の彼方で…"
                },
                n1b: {
                    name: "王家のガラクタ",
                    desc: "コレクション内の王冠カード総数に応じてシュレッド増加。<br>（現在: {0}枚 ⇒ {+1%}シュレッド増加）",
                    quote: "普通のガラクタより価値あり"
                },
                n1b2: {
                    name: "フォトブック",
                    desc: "獲得バッジ数に応じてシュレッド増加。<br>（現在: {0}個 ⇒ {+1%}シュレッド増加）",
                    quote: "あぁ、思い出…"
                },
                n1c: {
                    name: "エクストラポイント",
                    desc: "コレクション内の<rarity rarity='ex'></rarity>カード総数に応じてポイント増加。<br>（現在: {0}枚 ⇒ {+1%}ポイント増加）",
                    quote: "ポイントは多いほどいいよね？"
                },
                n1d: {
                    name: "未来計算機",
                    desc: "アンロックした統計エントリの総数に応じてポイント増加。<br>（現在: {0}件 ⇒ {+1%}ポイント増加）",
                    quote: "1 ^ 2 + 3 = 4"
                },
                n1d2: {
                    name: "ブラックフライデー",
                    desc: "pick-it Premiumでレベルアップした回数に応じてポイント増加。<br>（現在: {0}回 ⇒ {+1%}ポイント増加）",
                    quote: "セール中に買いまくれ！"
                },
                n1e: {
                    name: "AI生成チェッカーフロア（現実疑問用）",
                    desc: "スキルリアクション総数に応じてシュレッド増加。<br>（現在: {0}回 ⇒ {+1%}シュレッド増加）",
                    quote: "このためだけに技術進歩したのか…"
                },
                n2: {
                    name: "ノーと言う許可証",
                    desc: "現在の広告オファーをリロール可能（ウォッチクールダウン{0%}消費、{1s}）。",
                    quote: "そんなに難しくない"
                },
                s_fire: {
                    name: "バースト",
                    desc: "<b>Burst</b> スキルをアンロックします。",
                    quote: "またダンジョンで爆発魔法使ったの誰!?"
                },
                s_fire_1: {
                    name: "メガバースト",
                    desc: "<b>Burst</b>スキル発動時、追加で{+0s}スキップ。",
                    quote: "今度は華麗に"
                },
                s_fire_2: {
                    name: "爆発マスタリー",
                    desc: "このスキル使用ごとに<b>Burst</b>スキルのタイムスキップ{+0s}追加。<br>（現在: {1}回 ⇒ {+2s}スキップ）",
                    quote: "*粒子加速器の音*"
                },
                s_water: {
                    name: "フリーズドロップ",
                    desc: "<b>Freeze Drop</b>スキルをアンロックします。",
                    quote: "雪だるま作ろう？"
                },
                s_water_1: {
                    name: "遅いけど着実",
                    desc: "<b>Freeze Drop</b>発動中、カード倍率{+0%}ボーナス。",
                    quote: "ゆっくり確実にが一番"
                },
                s_water_2: {
                    name: "山頂",
                    desc: "<b>Freeze Drop</b>発動中、エネルギー上限到達時に{+1%}多くカードを引く。<br>{+0%}エネルギー上限ブースト。",
                    quote: "🍓"
                },
                s_leaf: {
                    name: "肥料",
                    desc: "<b>Fertilizer</b>スキルをアンロックします。",
                    quote: "木が早く育てば紙も早くできてシュレッドも増える"
                },
                s_leaf_1: {
                    name: "育成",
                    desc: "<b>Fertilizer</b>の倍率効果{x0:1}アップ。",
                    quote: "木を大切に"
                },
                s_sun: {
                    name: "光合成",
                    desc: "<b>Photosynthesis</b>スキルをアンロックします。",
                    quote: "太陽はそれほど危険なレーザーじゃない"
                },
                s_sun_1: {
                    name: "追加光量",
                    desc: "<b>Photosynthesis</b>のバフ・デバフ効果{+0%}アップ。",
                    quote: "これってフラッシュバン？"
                },
                s_moon: {
                    name: "単純化",
                    desc: "<b>Simplification</b>スキルをアンロックします。",
                    quote: "通貨が多すぎて持ちきれない"
                },
                s_moon_1: {
                    name: "抽象化",
                    desc: "<b>Simplification</b>のバフ{+0%}アップ、ただしデバフも{+1%}アップ。",
                    quote: "抽象化しすぎてフレーバーテキストを書く気も起きない"
                },
                s_moon_2: {
                    name: "抽象化^2",
                    desc: "<rarity rarity='ssr'></rarity><b>抽象化</b>のバフ効果レベルを{^0:1}上昇。",
                    quote: "これも同じく書く気が起きない"
                }
            },
            ur: {
                n0: {
                    name: "ママ",
                    desc: "基本バルク・バルクパワー・エネルギー上限・カード倍率{+0%}アップ。<br>シュレッド獲得量{+1%}アップ。<br>ポイント獲得量{x2}倍。",
                    quote: "<rarity rarity='ur'></rarity>ママは強化されすぎてゲーム最強ユニット"
                },
                n1a: {
                    name: "マルチファイア",
                    desc: "<b>Burst</b>スキルを最大{0}回まで同時発動可能。",
                    quote: "毎秒9000回転以上"
                },
                n1a1: {
                    name: "吸収",
                    desc: "<b>Burst</b>スキルのタイムスキップ・クールダウン{+0%}アップ。",
                    quote: "遅いけど強い"
                },
                n1a0: {
                    name: "灰からカードへ",
                    desc: "火属性時、カード倍率{+0%}アップ。",
                    quote: "木の灰をカードに注入する発想、なぜ今まで思いつかなかった？"
                },
                n1b: {
                    name: "スリーピングゲーム",
                    desc: "<b>Freeze Drop</b>発動中、ボーナスバルクエネルギー速度{+0%}アップ。",
                    quote: "略称の意味違うんじゃ？"
                },
                n1b0: {
                    name: "防水カード",
                    desc: "水属性時、カード倍率{+0%}アップ。",
                    quote: "カードが濡れても壊れない—洪水から救えるコレクションがどれだけ増えるか！"
                },
                n1c1: {
                    name: "種選び",
                    desc: "<b>Fertilizer</b>で王冠カードのシュレッド獲得量も{+0%}アップ。",
                    quote: "チェリーピッキングならぬ種ピッキング。最良の種が勝つ！"
                },
                n1c2: {
                    name: "電解質",
                    desc: "<b>Fertilizer</b>で基本シュレッド獲得量も{+0%}アップ。",
                    quote: "植物が欲しがる成分入り"
                },
                n1c0: {
                    name: "自家製ツリーファーム",
                    desc: "葉属性時、カード倍率{+0%}アップ。",
                    quote: "メリーランドを自宅に持ち込もう"
                },
                n1d: {
                    name: "くっつきカード",
                    desc: "光合成発動中に属性カード{drawn}で{0%}の確率で複製。",
                    quote: "実は2枚がくっついてるだけ。なぜこんなに多い？"
                },
                n1d0: {
                    name: "超高輝度用紙",
                    desc: "太陽属性時、カード倍率{+0%}アップ。",
                    quote: "ISO99.9999%の超高輝度用紙で、太陽系一特別なカードを作ろう！"
                },
                n1e: {
                    name: "シナジズム",
                    desc: "<b>単純化</b>の基本バフ効果が<rarity rarity=n></rarity><b>カードパック</b>の効果{^0:1}分追加。<br>（現在: {+1}）",
                    quote: "まさかのシナジズムネタ！？！？！？"
                },
                n1e0: {
                    name: "超暗黒インク",
                    desc: "月属性時、カード倍率{+0%}アップ。",
                    quote: "Vantablackもこれには敵わない"
                },
            },
            ex: {
                zip: {
                    name: "StackRAR",
                    desc: "Group together duplicate cards in the {draw} view, though the compression halves your card revealing speed in the process. Also remove the <span class='number'>100</span> bulk {draw} limit.",
                    quote: "Please note that StackRAR is not a free card. After a 40 day trial period you must either buy a license or burn this card off of your collection"
                },
                shred: {
                    name: "Shredder",
                    desc: "合成対象とならないカード（王冠付きカードや最大スターのカードを含む）を入手することでシュレッドを獲得する機能をアンロックします。",
                    quote: "Act as if nothing has ever happened"
                },
                offline: {
                    name: "Truly Idle",
                    desc: "Allow the game to progress while the game is not open, with reduced speed after {0} minutes of offline time.",
                    quote: "Drowning at work? I've got just the perfect card for you..."
                },
                faction: {
                    name: "Overused Faction System",
                    desc: "属性をアンロックします。属性付き{draws}を使って属性通貨や属性専用のカードを入手できます。<br>注: 属性通貨は出現しづらい場合があります。",
                    quote: "Long ago, the five factions lived together in harmony. Then, everything changed when the fire faction attacked."
                },
                pickit: {
                    name: "pick-it Premium",
                    desc: "一定時間のみ pick-it Premium ソートを有効にする機能をアンロックします。<br/>"
                        + "pick-it Premium はアップグレード不可のカードを除外し、最も安い強化価格順に並べます。",
                    quote: "You can go right to what you want to see. Nothing to get in your way. pick-it Premium will widen and deepen your card-browsing passions."
                },
                autobuy: {
                    name: "Auto-Buyer",
                    desc: "While pick-it Premium is active, automatically upgrade the first upgradeable card in the collection {0} times per second.",
                    quote: "Talk about irresponsible spending"
                },
                iris: {
                    name: "irisVision",
                    desc: "コレクションタブでカードの進捗を表示する機能をアンロックします。",
                    quote: "The irisVision works by searching the online database of the game for any cards that is available in the object pool. You *could* just look these info up on the internet yourself but you wouldn't get any side-effect bonuses from <rarity rarity='ssr'></rarity> Royal Junk and similar cards that way so..."
                },
                skills: {
                    name: "Combo",
                    desc: "アクティブスキルをアンロックします。（個別のスキルは属性付き{drawing}でアンロックされます）",
                    quote: "↑↑↓↓←→←→BA"
                },
                skills2: {
                    name: "Incantation-less Magic Pack",
                    desc: "スキルのクールダウンを短縮するカードをアンロックします。",
                    quote: "Did you know that the earlier you learn incantation-less magic the easier it is to do it?"
                }
            }
        },
        standard_legacy: {
            n: {
                n0: {
                    name: "Fancier Dots",
                    desc: "{+0%} point gains.",
                    quote: "Now your dots can wear hats! Dots that wear hats are worth more than regular dots"
                },
                n1: {
                    name: "Military-Grade Shredders",
                    desc: "{+0%} shred gains.",
                    quote: "Leave no traces with this specially-designed shredder that are efficient at shredding top-secret cards! Smaller shred particles means more inflated shred counts!"
                },
                n2: {
                    name: "Generational Inheritage",
                    desc: "{+0%} all faction currency gains.",
                    quote: "TIL my father is a very respected Omega Cards player"
                },
                n2a: {
                    name: "Scroll of Flame",
                    desc: "{+0%} fire power gains.",
                    quote: "Chapter 2, Section 18:<br>Your body radiates magic in the form of heat inside your body."
                },
                n2b: {
                    name: "Scroll of Waves",
                    desc: "{+0%} water power gains.",
                    quote: "Chapter 2, Section 21:<br>Soak your feet in water. Do you feel colder? That's because water can absorb magic faster than any other materials."
                },
                n2c: {
                    name: "Scroll of Plants",
                    desc: "{+0%} leaf power gains.",
                    quote: "Chapter 2, Section 27:<br>Feel the movement of the ground below you. Tiny little movement does matter."
                },
                n2d: {
                    name: "Scroll of Light",
                    desc: "{+0%} sun power gains.",
                    quote: "Chapter 2, Section 32:<br>Try to think about your idea of a world everybody would like to live in."
                },
                n2e: {
                    name: "Scroll of Tranquillity",
                    desc: "{+0%} moon power gains.",
                    quote: "Chapter 2, Section 36:<br>Close your eyes. Try to ignore all surrounding sounds. Feel the calmness from the soul inside you."
                },
                n3: {
                    name: "Mana Gatherer",
                    desc: "{+0%} faction power chance.",
                    quote: "Collects mana power from ambient space"
                },
                n4: {
                    name: "Starting Deck",
                    desc: "{+0} base bulk.<br>{+1%} card multiplier.",
                    quote: "Obviously you need a way to properly start your card collecting journey!... Would you like to buy this starter deck?"
                },
            },
            ex: {
                legacy: {
                    name: "Omega Cards Legacy",
                    desc: "アカウント間で転送可能なレガシーカードをアンロックします。このカードを入手するかアカウントを売却すると、{1} の中から {0} を選んでコレクションに追加できます。",
                    quote: "Tear this card into pieces. Throw the pieces into the playing area from a distance of at least five feet. Everything the pieces touch now permanently belongs to you. Collect the cards and put them into the bottom of your draw pile while everyone looks at you in a weird way"
                },
                zip: {
                    name: "7Stack",
                    desc: "Group together duplicate cards in the {draw} view. Remove the <rarity rarity='ex'></rarity> <b>StackRAR</b> card from the Marketplace.",
                    quote: "It's day 41 already"
                },
                pickit: {
                    name: "Card Suite",
                    desc: "<rarity rarity='sr'></rarity> <b>pick-it</b> と <rarity rarity='ex'></rarity> <b>irisVision</b> のカードフィルタと進捗表示機能をアンロックします。ただしゲーム内でのカード出現は削除されます。",
                    quote: "Announcement: The popular Quality of Life feature everyone is enjoying is now free!<br/>※Except for the card popularity sorting feature, a monthly fee is still required"
                },
                ads: {
                    name: "You're the Product",
                    desc: "“広告”を“視聴”することで一時的なブーストを得る機能をアンロックします。",
                    quote: "T̴̡̅̓ḧ̵̩́͌e̴̪̼̐͌r̴̼̉é̶͚'̷͎͗s̵̗̎̿ ̸̩͝ń̴̹̣̓o̴̜͒ ̶͙̪̐ȅ̶͔̰s̴̡̨͋c̷̪͑̄a̵̢̞̐́p̴͕̟̈́̊e̸͖̫̋͠"
                },
            }
        }
    },

    /** 
     * Strings related to skill, such as their names or descriptions.
    */
    skills: {
        fire: {
            name: "Burst",
            desc: "Instantly gain {0} worth of bulk energy.",
        },
        water: {
            name: "Freeze Drop",
            desc: "Increase the bulk energy cap by {0} until the next {draw}, but increase its cooldown by {1}.",
        },
        leaf: {
            name: "Fertilizer",
            desc: "Increase all shred multiplier per rarity increase by {0} for the next {draw}.",
        },
        sun: {
            name: "Photosynthesis",
            desc: "Increase faction power gain by {0} for the next {draw}, but decrease point and shred gain by {1}."
        },
        moon: {
            name: "Simplification",
            desc: "Increase point gain by {0} for the next {draw}, but decrease faction power gain by {1}."
        },
    },

    packs: {
        standard: {
            legacy: {
                name: "Legacy Expansion Pack",
                desc: 
                    "新しい<strong><i>転送可能なカード</i></strong>で新たな遊び方をアンロックします！<br>" +
                    "四枚もの新規独占 <rarity rarity='ex'></rarity> カードが付属します！",
                perks: [
                    "Four new <rarity rarity='ex'></rarity> cards"
                ]
            },
            starter: {
                name: "Starter Pack",
                desc: 
                    "Obtain <rarity rarity='ex'></rarity> <b>Truly Idle</b>, <rarity rarity='ex'></rarity> <b>Shredder</b>, and <rarity rarity='ex'></rarity> <b>pick-it Premium</b> right at the start of the game!<br>" +
                    "Also includes a whopping {0} bonus points and {1} bonus shreds!",
                perks: [
                    "<rarity rarity='ex'></rarity> Truly Idle",
                    "<rarity rarity='ex'></rarity> Shredder",
                    "<rarity rarity='ex'></rarity> pick-it Premium",
                    "{0} points",
                    "{1} shreds",
                ]
            }
        },
    },
    
    /** 
     * Strings related to stat entries.
    */
    stats: {
        general: {
            name: "General", 
            items: {
                timeProgress: {
                    name: "Game time",
                },
                timePlayed: {
                    name: "Active play time",
                },
            }
        },    
        legacy: {
            name: "Legacy", 
            items: {
                accountsSold: {
                    name: "Accounts sold",
                },
                legacyCardsDrawn: {
                    name: "Legacy cards {drawn}",
                },
            }
        },    
        cards: {
            name: "Cards",
            items: {
                cardsDrawn: {
                    name: "Cards {drawn}",
                },
                bulkDraw: {
                    name: "Base bulk",
                },
                bulkPower: {
                    name: "Bulk power",
                },
                bulkMult: {
                    name: "Card multiplier",
                },
                energySpeed: {
                    name: "Bonus energy speed",
                },
                cardRChance: {
                    name: "<rarity rarity='r'></rarity> appear chance",
                },
                cardSRChance: {
                    name: "<rarity rarity='sr'></rarity> appear chance",
                },
                cardSSRChance: {
                    name: "<rarity rarity='ssr'></rarity> appear chance",
                },
                cardURChance: {
                    name: "<rarity rarity='ur'></rarity> appear chance",
                },
            }
        },
        points: {
            name: "Points",
            items: {
                base: {
                    name: "Base gain",
                },
                extra: {
                    name: "Random gain",
                },
                mult: {
                    name: "Multiplier",
                },
                calc: {
                    name: "Gain on {draw}",
                },
            }
        },
        shreds: {
            name: "Shreds",
            items: {
                base: {
                    name: "Base gain",
                },
                crownMult: {
                    name: "Crowned card mult",
                },
                rMult: {
                    name: "<rarity rarity='r'></rarity>+ card mult",
                },
                srMult: {
                    name: "<rarity rarity='sr'></rarity>+ card mult",
                },
                ssrMult: {
                    name: "<rarity rarity='ssr'></rarity>+ card mult",
                },
                urMult: {
                    name: "<rarity rarity='ur'></rarity>+ card mult",
                },
            }
        },
        faction: {
            name: "Faction",
            items: {
                chance: {
                    name: "Power chance",
                },
                fire: {
                    name: "Fire Power gain",
                },
                water: {
                    name: "Water Power gain",
                },
                leaf: {
                    name: "Leaf Power gain",
                },
                sun: {
                    name: "Sun Power gain",
                },
                moon: {
                    name: "Moon Power gain",
                },
                mult: {
                    name: "All Power mult",
                },
                calc: {
                    name: "Gain on {draw}",
                },
            }
        },
        skills: {
            name: "Skills",
            items: {
                fireUse: {
                    name: "“Burst” uses",
                },
                waterUse: {
                    name: "“Freeze Drop” uses",
                },
                leafUse: {
                    name: "“Fertilizer” uses",
                },
                sunUse: {
                    name: "“Photosynthesis” uses",
                },
                moonUse: {
                    name: "“Simplification” uses",
                },
                reaction: {
                    name: "Skill reactions",
                },
            }
        }
    },

    /** 
     * Strings related to buffs, such as their names or descriptions.
    */
    buffs: {
        draw: {
            pointsMult: {
                name: "Point UP",
                desc: "Point gains are multiplied by {x0:1} for the next {1} draws!",
            },
            shredsMult: {
                name: "Shred UP",
                desc: "Shred gains are multiplied by {x0:1} for the next {1} draws!",
            },
            factionMult: {
                name: "Power UP",
                desc: "Faction power gains are multiplied by {x0:1} for the next {1} draws!",
            },
        },
        time: {
            energySpeed: {
                name: "Supercharged",
                desc: "Passive Bulk Energy gain is {x0:1} faster for {1s}!",
            },
        },
    },

    /** 
     * Strings related to badges, such as their names or descriptions.
    */
    badges: {
        11: {
            name: "Another Gacha Game to the Pile",
            desc: "{Draw} cards for the first time.",
        },
        12: {
            name: "Four-Leaf Clover",
            desc: "Obtain an <rarity rarity='r'></rarity> card.",
        },
        13: {
            name: "Luck or Dedication?",
            desc: "Obtain an <rarity rarity='sr'></rarity> card.",
        },
        14: {
            name: "Plz plz plz Legendary",
            desc: "Obtain an <rarity rarity='ssr'></rarity> card.",
        },
        15: {
            name: "Ultra Rare or Uber Rare?",
            desc: "Obtain an <rarity rarity='ur'></rarity> card.",
        },
        21: {
            name: "Finally I can see what I'm doing!",
            desc: "View your badges in-game.",
        },
        22: {
            name: "Polar Opposites",
            desc: "Create a skill reaction.",
        },
        23: {
            name: "Just throw it away",
            desc: "Make a no faction {draw} with Photosynthesis active.",
        },
        24: {
            name: "Safe and Sound",
            desc: "Manually save your game data to the cloud, or export your save.",
        },
        25: {
            name: "Two whole cours",
            desc: "Play the game for 24 anime episodes.",
        },
        31: {
            name: "Would you like to buy more {draws}?",
            desc: "Use all of your one trillion free {draws}.",
        },
        32: {
            name: "Everywhere I go, I see this achievement",
            desc: "“Watch” an “ad”.",
        },
    },

    /** 
     * Strings to use in slideshows.
     * 
     * The `directive` list in each slideshow entries are used to control the slideshow's image and texts.
     * - `["image", x]` sets the banner image to that found in `/res/slideshow/{show id}/{x}.png/, or a
     * placeholder image if the destination image is not found.
     * - `["text", x]` plays a scrolling text at the bottom of the banner image.
     * 
     * You may add or remove text entries if if makes the translation better, 
     * but the order of image entries should stay the same.
    */
    slideshows: {
        1: {
            name: "Intro",
            directives: [
                ["image", "1"],
                ["text", "時は2078年。"],
                ["image", "2"],
                ["text", "ガチャゲームは人々の生活の一部となった。"],
                ["text", "何が当たるかわからないスリル、レアな{draw}を引いた時の満足感、あらゆるゲームにガチャ要素を簡単に追加できる柔軟さ…"],
                ["text", "ガチャゲームは、カジュアル層も競争志向の層も、時間を過ごす最高の方法だと考えられている。"],
                ["text", "ただ、ガチャゲームについて語る時、それが最も重要な点ではない。"],
                ["text", "重要なのは…"],
                ["image", "3"],
                ["text", "とにかく<i>莫大な</i>お金が動くこと。"],
                ["text", "ガチャ業界は数十億ドル規模の産業に成長し、他の娯楽産業を遥かに凌駕している。"],
                ["text", "金を追い求めて、毎瞬間何十億ものガチャゲームが生まれている。"],
                ["text", "市場がゲームで溢れかえった今、プレイヤーに自分たちの価値を示す方法が必要だ。"],
                ["image", "4"],
                ["text", "そこで広告の登場。"],
                ["text", "最初はグラフィックやゲーム性の良さをアピールしていた。"],
                ["text", "しかし、それでは多くのプレイヤーを惹きつけられなかった。"],
                ["text", "やがて、最も効果的な宣伝方法は…大量の無料アイテムを配ることだと気付いた。"],
                ["text", "バーチャル通貨や{draws}は、会社が好きなだけ配れる仮想のもの。"],
                ["text", "プレイヤーが大きな数字に慣れると、さらに多くを求めるようになる。"],
                ["text", "企業は配らざるを得ない。常にもっと配るゲームが現れ、より多くのプレイヤーと利益を得る。"],
                ["text", "こうして、ゲームはどんどん無料アイテムを配り続け、数字は現実の意味を失うほど膨れ上がった。"],
                ["image", "5"],
                ["text", "You, a person in this society, lying in bed, are about to pick up a new gacha game."],
                ["image", "6"],
                ["text", "Omega Cards, for the mobile devices, the first game of its kind to advertise a trillion free card {draws}. The number that's one followed by twelve zeroes."],
                ["text", "To people 50 years ago, that sounded like a crazy amount of free {draws} to give, but the scene has caught up so fast that it's now just a lesser number compared to other games."],
                ["text", "Though, you still see people on the internet come back to it from time to time for the nostalgia values."],
                ["image", "5"],
                ["text", "You found it interesting enough to start the game for the first time, though the game wants you to use up your one trillion {draws} first."],
                ["text", "And that's when you realize..."],
                ["image", "7"],
                ["text", "...you will definitely be here for a while."],
            ]
        },
        2: {
            name: "End of Free Trial",
            directives: [
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...Wait, is that it?"],
                ["image", "1"],
                ["text", "..."],
                ["image", "2"],
                ["text", "...Well, that is it!"],
                ["image", "3"],
                ["text", "One trillion free draws, all used up!"],
                ["text", "That was faster than you expected."],
                ["text", "At first, you thought that it would take longer than your lifetime to spend all those card draws one by one."],
                ["image", "1"],
                ["text", "...But well, what are you going to do now?"],
                ["text", "Now that you no longer have any draws left, there's not that many things to do in the game anymore."],
                ["text", "Everything in the game seems to be directly linked to you drawing cards, but since you can't do that anymore, everything just grinds to a halt."],
                ["text", "You can't just buy more draws, you've just ran out of money trying to pay your apartment's rent and today's dinner!"],
                ["text", "..."],
                ["text", "Unless..."],
                ["image", "4"],
                ["text", "...you do that thing..."],
            ]
        },
        3: {
            name: "New Game+",
            directives: [
                ["image", "1"],
                ["text", "Okay, you've got some money now, but at what cost?"],
                ["text", "Losing all of your hard earned progress and going back to the beginning?"],
                ["image", "2"],
                ["text", "..."],
                ["image", "3"],
                ["text", "...Come to think about it a little bit more, it isn't that bad actually."],
                ["text", "At least you can reclaim that one trillion free draws given by freshly created accounts."],
                ["text", "With the little amount of money you now obtain, you can buy that starter pack to help you progress faster..."],
                ["text", "...which means you can spend those trillion free draws faster, and sell this account for money sooner."],
                ["text", "Just do this a few times and you can finally earn enough money for a living! Or become a trillionaire, even!"],
                ["image", "4"],
                ["text", "...The underground account trading market seems to be bigger than you originally think."],
                ["text", "Well, maybe that's because selling gacha game accounts isn't that big of a deal for international gaming laws to intervene."],
                ["text", "They actually attempted to ban game developers from preventing people to sell their gacha game accounts!"],
                ["text", "Now that most of the “normal” jobs are replaced by robots, doing this is considered a niche way to earn money by some people."],
                ["image", "5"],
                ["text", "...Time to start now, shall we?"],
            ]
        },
    },

    ads: {
        minigames: {
            sort: {
                action_undo: "Undo",
                action_restart: "Restart",
            }
        }
    }
}
