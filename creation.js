//ここからは、各パラメータのデータを書いていく。

var name_deta = ["かもめ", "ジェリー", "レイオス", "キューロ", "ナッツ", "花子", "太郎", "トム", "向日葵", "ランマ", "リンネ",
    "ラム", "サクラ", "智代", "小狼", "パ・イーシェン", "エレン", "アッカ―", "田中", "クロウ", "ユキト", "なっちゃん", "鬼瓦",
    "メガネ", "小川", "サイトウ", "モコナ", "ケロ", "レム", "ジョンソン", "龍", "ケン", "ボブ", "中田", "サリス", "ラルフ", "瑠璃",
    "サファイア", "ルビー", "ラピス", "ラピスラズリ", "ダイヤ", "クリスタ", "エメラルド", "夜見", "ユエ", "わたぬき", "優香", "ヒナ",
    "まき", "ユウナ", "アン", "アン二ナ", "デボラ", "クリスト", "カール", "ソフィア", "ベンジャミン", "ナニー", "オットー", "王",
    "蒲公英", "鈴蘭", "蘭", "わたあめ", "素焼きナッツ", "百合", "ガーベラ", "秋桜", "薔薇百合", "✝漆黒の堕天使✝", "✝ミカエル✝",
    "いちごジャム", "✝マリア", "ゼウス", "エロス", "イザナミノミコト", "刹那", "シレイ", "琥珀", "羅針", "夕凪", "鳳凰", "疾風",
    "ツクヨミ", "翡翠", "閻魔", "つつじ", "アゲハ", "冥王", "白銀", "プリン～～", "キツツキ", "ツバメ", "スズメ", "ひよこ", "ハヤブサ",
    "佐々木", "ヤンバルクイナ", "✝混沌を望み世界の支配構造を破滅する者なっちゃん✝"]


var hidden_sts = ["力補正 + 5pt", "防御補正 + 5pt", "体力補正 + 5pt", "素早さ補正 + 5pt", "クリティカル補正 + 5pt",
    "力補正 + 10pt", "防御補正 + 10pt", "体力補正 + 10pt", "素早さ補正 + 10pt", "クリティカル補正 + 10pt",
    "hp常時回復", "根性", "5秒無敵", "10秒無敵", "2回攻撃",
    "hp吸収", "火事場の馬鹿力", "クリティカルダメージ + 5pt", "クリティカルダメージ + 10pt", "打たれ弱い"]


//合計spの値
let total_sp = 100;

//各ステータスの値
let hp = 20;
let str = 20;
let def = 20;
let spd = 20;
let crl = 20;

let variation_hp = 0;
let variation_str = 0;
let variation_def = 0;
let variation_spd = 0;
let variation_crl = 0;



//ここからは保存に関するクラスを書いていく。

class SAVE {
    constructor() {

    }

    //名前ページの設定
    name_save() {
        $("#save_name").click(function () {
            const text = $('#text_area').val();
            localStorage.setItem('name', text);
            $('.ch_now_text').text(text);
            if (text == " ") {
                $('.ch_now_text').text('" "');
            }
        });


        //1.5ランダム クリックイベント
        $("#radom").click(function () {
            var ram = name_deta[Math.floor(Math.random() * name_deta.length)];
            $('#text_area').val(ram);
            console.log(ram);
        });


        //2.clear クリックイベント
        $("#clear_name").click(function () {
            localStorage.removeItem('name');
            $('#text_area').val(" ");
            $('.ch_now_text').text('" "');
        });

        //3.ページ読み込み：保存データ取得表示
        if (localStorage.getItem('name')) {
            const text = localStorage.getItem('name');
            $('.ch_now_text').text(text);
            if (text == " ") {
                $('.ch_now_text').text('" "');
            }
        }
    }

    //見た目ページの設定
    appearance_save() {

        let serect_img = [255];

        //用意した画像を配列へ代入

        for (let i = 0; i < 17; i++) {
            if (i <= 4 || i == 7 || i == 9 || i == 13 || i == 14) {
                serect_img[i] = "img/robotto_" + i + ".png";
            } else if (i == 16) {
                serect_img[i] = "img/robotto_" + i + ".jpeg";
            } else {
                serect_img[i] = "img/robotto_" + i + ".jpg";
            }

            console.log(serect_img[i]);
        }

        let now_page = 0;

        //左ボタンを押したら
        $('#appearance_left').on('click', function () {
            if (now_page == 0) {
            } else {
                now_page--;
                var add = document.getElementById('appearance_img');
                add.setAttribute('src', serect_img[now_page]);
                $('.img_page_text').text(now_page + " / 16");
            }
        });

        //右ボタンを押したら

        $('#appearance_right').on('click', function () {
            if (now_page == 16) {
            } else {
                now_page++;
                var add = document.getElementById('appearance_img');
                add.setAttribute('src', serect_img[now_page]);
                $('.img_page_text').text(now_page + " / 16");
            }
            console.log(serect_img[now_page]);
        });


        //セーブボタン
        $("#save_appearance").click(function () {

            var appearance_obj = {
                "serect_img": serect_img[now_page],
                "now_page": now_page
            }

            var appearance_json = JSON.stringify(appearance_obj);
            localStorage.setItem('appearance_json', appearance_json);

            $('.set_img').text('"' + now_page + '"');

            var view = document.getElementById('view_img');
            view.setAttribute('src', serect_img[now_page]);

        });

        //2.clear クリックイベント
        $("#clear_appearance").click(function () {

            $('.set_img').text('" "');
            localStorage.removeItem('appearance_json');

            var view = document.getElementById('view_img');
            view.setAttribute('src', "img/noimage.png");
        });

        //3.ページ読み込み：保存データ取得表示
        if (localStorage.getItem('appearance_json')) {

            const get_json_appearance = localStorage.getItem('appearance_json');
            var get_obj_appearance = JSON.parse(get_json_appearance);

            now_page = get_obj_appearance.now_page;
            serect_img[now_page] = get_obj_appearance.serect_img;

            var add = document.getElementById('appearance_img');
            add.setAttribute('src', serect_img[now_page]);
            $('.img_page_text').text(now_page + " / 16");
            $('.set_img').text('"' + now_page + '"');

            var view = document.getElementById('view_img');
            view.setAttribute('src', serect_img[now_page]);

        }
    }

    //ステータスページの設定

    status_save() {

        //各ステータスエリアのボタン判定変数

        let clicked_str = false;
        let clicked_def = false;
        let clicked_spd = false;
        let clicked_hp = false;
        let clicked_crl = false;

        let clicked_pa = [clicked_str, clicked_def, clicked_spd, clicked_hp, clicked_crl];

        const statuss = ["str", "def", "hp", "spd", "crl"];

        var func = function () {
            var mychart = new Chart($('#chart'), {
                type: 'radar',
                data: {
                    labels: [
                        '力',
                        '防御',
                        '体力',
                        '素早さ',
                        'クリティカル'
                    ],
                    datasets: [{
                        label: 'ステータス',
                        data: [
                            str, def, hp, spd, crl
                        ],
                        backgroundColor: 'rgba(241, 107, 141, 0.5)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1,
                        pointBackgroundColor: 'rgba(63,106,177,0.7)',
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                            stepSize: 50,
                        },
                        angleLines: {        // 軸（放射軸）
                            display: true,
                            color: "brack"
                        },
                        gridLines: {         // 補助線（目盛の線）
                            display: true,
                            color: "lime"
                        }
                    }
                }
            });
        }

        var func_view = function () {
            var mychart_view = new Chart($('#chart_view'), {
                type: 'radar',
                data: {
                    labels: [
                        '力',
                        '防御',
                        '体力',
                        '素早さ',
                        'クリティカル'
                    ],
                    datasets: [{
                        label: 'ステータス',
                        data: [
                            str, def, hp, spd, crl
                        ],
                        backgroundColor: 'rgba(241, 107, 141, 0.5)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1,
                        pointBackgroundColor: 'rgba(63,106,177,0.7)',
                    }]
                },
                options: {
                    scale: {
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                            stepSize: 50,
                        },
                        angleLines: {        // 軸（放射軸）
                            display: true,
                            color: "brack"
                        },
                        gridLines: {         // 補助線（目盛の線）
                            display: true,
                            color: "lime"
                        }
                    }
                }
            });
        }

        func_view();
        func();

        //各ステータスを選択
        $('#main_str').on('click', function () {
            $('#main_str').css('opacity', '1');
            $('#main_def').css('opacity', '0.2');
            $('#main_hp').css('opacity', '0.2');
            $('#main_spd').css('opacity', '0.2');
            $('#main_crl').css('opacity', '0.2');

            clicked_str = true;
            clicked_def = false;
            clicked_hp = false;
            clicked_spd = false;
            clicked_crl = false;
        });


        $('#main_def').on('click', function () {
            $('#main_str').css('opacity', '0.2');
            $('#main_def').css('opacity', '1');
            $('#main_hp').css('opacity', '0.2');
            $('#main_spd').css('opacity', '0.2');
            $('#main_crl').css('opacity', '0.2');

            clicked_str = false;
            clicked_def = true;
            clicked_hp = false;
            clicked_spd = false;
            clicked_crl = false;
        });


        $('#main_hp').on('click', function () {
            $('#main_str').css('opacity', '0.2');
            $('#main_def').css('opacity', '0.2');
            $('#main_hp').css('opacity', '1');
            $('#main_spd').css('opacity', '0.2');
            $('#main_crl').css('opacity', '0.2');

            clicked_str = false;
            clicked_def = false;
            clicked_hp = true;
            clicked_spd = false;
            clicked_crl = false;
        });


        $('#main_spd').on('click', function () {
            $('#main_str').css('opacity', '0.2');
            $('#main_def').css('opacity', '0.2');
            $('#main_hp').css('opacity', '0.2');
            $('#main_spd').css('opacity', '1');
            $('#main_crl').css('opacity', '0.2');

            clicked_str = false;
            clicked_def = false;
            clicked_hp = false;
            clicked_spd = true;
            clicked_crl = false;
        });


        $('#main_crl').on('click', function () {
            $('#main_str').css('opacity', '0.2');
            $('#main_def').css('opacity', '0.2');
            $('#main_hp').css('opacity', '0.2');
            $('#main_spd').css('opacity', '0.2');
            $('#main_crl').css('opacity', '1');

            clicked_str = false;
            clicked_def = false;
            clicked_hp = false;
            clicked_spd = false;
            clicked_crl = true;

        });

        //それ以外を押してパラメータ選択を外す
        $(document).click(function (event) {
            if (!$(event.target).closest('.change_pa').length && !$(event.target).closest('.chage_math_left').length && !$(event.target).closest('.chage_math_right').length) {
                $('#main_str').css('opacity', '0.8');
                $('#main_def').css('opacity', '0.8');
                $('#main_hp').css('opacity', '0.8');
                $('#main_spd').css('opacity', '0.8');
                $('#main_crl').css('opacity', '0.8');
                clicked_str = false;
                clicked_def = false;
                clicked_hp = false;
                clicked_spd = false;
                clicked_crl = false;
            }
        });

        //ステータスの加減計算

        $('#plus_ten').on('click', function () {
            if (clicked_str == true && str < 91 && total_sp > 9) {
                total_sp -= 10;
                str += 10;
                variation_str += 10;
                $('#total_str').text("total " + str + "pt");
                $('#variation_str').text("+ " + variation_str + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_def == true && def < 91 && total_sp > 9) {
                total_sp -= 10;
                def += 10;
                variation_def += 10;
                $('#total_def').text("total " + def + "pt");
                $('#variation_def').text("+ " + variation_def + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_hp == true && hp < 91 && total_sp > 9) {
                total_sp -= 10;
                hp += 10;
                variation_hp += 10;
                $('#total_hp').text("total " + hp + "pt");
                $('#variation_hp').text("+ " + variation_hp + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_spd == true && spd < 91 && total_sp > 9) {
                total_sp -= 10;
                spd += 10;
                variation_spd += 10;
                $('#total_spd').text("total " + spd + "pt");
                $('#variation_spd').text("+ " + variation_spd + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_crl == true && crl < 91 && total_sp > 9) {
                total_sp -= 10;
                crl += 10;
                variation_crl += 10;
                $('#total_crl').text("total " + crl + "pt");
                $('#variation_crl').text("+ " + variation_crl + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            func();
        });

        $('#minus_ten').on('click', function () {
            if (clicked_str == true && str > 29 && total_sp < 91) {
                total_sp += 10;
                str -= 10;
                variation_str -= 10;
                $('#total_str').text("total " + str + "pt");
                $('#variation_str').text("+ " + variation_str + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_def == true && def > 29 && total_sp < 91) {
                total_sp += 10;
                def -= 10;
                variation_def -= 10;
                $('#total_def').text("total " + def + "pt");
                $('#variation_def').text("+ " + variation_def + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_hp == true && hp > 29 && total_sp < 91) {
                total_sp += 10;
                hp -= 10;
                variation_hp -= 10;
                $('#total_hp').text("total " + hp + "pt");
                $('#variation_hp').text("+ " + variation_hp + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_spd == true && spd > 29 && total_sp < 91) {
                total_sp += 10;
                spd -= 10;
                variation_spd -= 10;
                $('#total_spd').text("total " + spd + "pt");
                $('#variation_spd').text("+ " + variation_spd + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_crl == true && crl > 29 && total_sp < 91) {
                total_sp += 10;
                crl -= 10;
                variation_crl -= 10;
                $('#total_crl').text("total " + crl + "pt");
                $('#variation_crl').text("+ " + variation_crl + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            func();
        });


        $('#plus_one').on('click', function () {
            if (clicked_str == true && str < 100 && total_sp > 0) {
                total_sp -= 1;
                str += 1;
                variation_str += 1;
                $('#total_str').text("total " + str + "pt");
                $('#variation_str').text("+ " + variation_str + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_def == true && def < 100 && total_sp > 0) {
                total_sp -= 1;
                def += 1;
                variation_def += 1;
                $('#total_def').text("total " + def + "pt");
                $('#variation_def').text("+ " + variation_def + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_hp == true && hp < 100 && total_sp > 0) {
                total_sp -= 1;
                hp += 1;
                variation_hp += 1;
                $('#total_hp').text("total " + hp + "pt");
                $('#variation_hp').text("+ " + variation_hp + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_spd == true && spd < 100 && total_sp > 0) {
                total_sp -= 1;
                spd += 1;
                variation_spd += 1;
                $('#total_spd').text("total " + spd + "pt");
                $('#variation_spd').text("+ " + variation_spd + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_crl == true && crl < 100 && total_sp > 0) {
                total_sp -= 1;
                crl += 1;
                variation_crl += 1;
                $('#total_crl').text("total " + crl + "pt");
                $('#variation_crl').text("+ " + variation_crl + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            func();
        });

        $('#minus_one').on('click', function () {
            if (clicked_str == true && str > 20 && total_sp < 100) {
                total_sp += 1;
                str -= 1;
                variation_str -= 1;
                $('#total_str').text("total " + str + "pt");
                $('#variation_str').text("+ " + variation_str + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_def == true && def > 20 && total_sp < 100) {
                total_sp += 1;
                def -= 1;
                variation_def -= 1;
                $('#total_def').text("total " + def + "pt");
                $('#variation_def').text("+ " + variation_def + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_hp == true && hp > 20 && total_sp < 100) {
                total_sp += 1;
                hp -= 1;
                variation_hp -= 1;
                $('#total_hp').text("total " + hp + "pt");
                $('#variation_hp').text("+ " + variation_hp + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_spd == true && spd > 20 && total_sp < 100) {
                total_sp += 1;
                spd -= 1;
                variation_spd -= 1;
                $('#total_spd').text("total " + spd + "pt");
                $('#variation_spd').text("+ " + variation_spd + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }
            if (clicked_crl == true && crl > 20 && total_sp < 100) {
                total_sp += 1;
                crl -= 1;
                variation_crl -= 1;
                $('#total_crl').text("total " + crl + "pt");
                $('#variation_crl').text("+ " + variation_crl + "pt");
                $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            }

            func();
        });

        //セーブボタン選択
        $("#save_status").click(function () {

            var hidden_ram = hidden_sts[Math.floor(Math.random() * hidden_sts.length)];
            var now_hidden = hidden_ram;

            var status_obj = {
                "str": str,
                "def": def,
                "hp": hp,
                "spd": spd,
                "crl": crl,
                "variation_str": variation_str,
                "variation_def": variation_def,
                "variation_hp": variation_hp,
                "variation_spd": variation_spd,
                "variation_crl": variation_crl,
                "total_sp": total_sp,
                "hidden": now_hidden
            }

            var status_json = JSON.stringify(status_obj);
            localStorage.setItem('status_json', status_json);
            $('#hidden_text').text(now_hidden);
            func_view();
        });

        //2.clear クリックイベント
        $("#clear_status").click(function () {

            total_sp = 100;

            hp = 20;
            str = 20;
            def = 20;
            spd = 20;
            crl = 20;

            variation_hp = 0;
            variation_str = 0;
            variation_def = 0;
            variation_spd = 0;
            variation_crl = 0;

            $('#total_str').text("total " + str + "pt");
            $('#variation_str').text("+ " + variation_str + "pt");
            $('#total_def').text("total " + def + "pt");
            $('#variation_def').text("+ " + variation_def + "pt");
            $('#total_hp').text("total " + hp + "pt");
            $('#variation_hp').text("+ " + variation_hp + "pt");
            $('#total_spd').text("total " + spd + "pt");
            $('#variation_spd').text("+ " + variation_spd + "pt");
            $('#total_crl').text("total " + crl + "pt");
            $('#variation_crl').text("+ " + variation_crl + "pt");
            $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            localStorage.removeItem('status_json');
            $('#hidden_text').text(" ");

            func_view();
            func();
        });

        //3.ページ読み込み：保存データ取得表示
        if (localStorage.getItem('status_json')) {
            const get_json = localStorage.getItem('status_json');
            var get_obj = JSON.parse(get_json);

            let now = get_obj.hidden;
            total_sp = get_obj.total_sp;

            hp = get_obj.hp;
            str = get_obj.str;
            def = get_obj.def;
            spd = get_obj.spd;
            crl = get_obj.crl;

            variation_hp = get_obj.variation_hp;
            variation_str = get_obj.variation_str;
            variation_def = get_obj.variation_def;
            variation_spd = get_obj.variation_spd;
            variation_crl = get_obj.variation_crl;

            $('#total_str').text("total " + str + "pt");
            $('#variation_str').text("+ " + variation_str + "pt");
            $('#total_def').text("total " + def + "pt");
            $('#variation_def').text("+ " + variation_def + "pt");
            $('#total_hp').text("total " + hp + "pt");
            $('#variation_hp').text("+ " + variation_hp + "pt");
            $('#total_spd').text("total " + spd + "pt");
            $('#variation_spd').text("+ " + variation_spd + "pt");
            $('#total_crl').text("total " + crl + "pt");
            $('#variation_crl').text("+ " + variation_crl + "pt");
            $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");
            $('#hidden_text').text(now);

            func_view();
            func();
        }
    }

    reset() {
        $("#new_game").click(function () {

            localStorage.removeItem('name');
            $('#text_area').val(" ");
            $('.ch_now_text').text('" "');

            $('.set_img').text('" "');
            localStorage.removeItem('appearance_json');

            var view = document.getElementById('view_img');
            view.setAttribute('src', "img/noimage.png");

            total_sp = 100;

            hp = 20;
            str = 20;
            def = 20;
            spd = 20;
            crl = 20;

            variation_hp = 0;
            variation_str = 0;
            variation_def = 0;
            variation_spd = 0;
            variation_crl = 0;

            $('#total_str').text("total " + str + "pt");
            $('#variation_str').text("+ " + variation_str + "pt");
            $('#total_def').text("total " + def + "pt");
            $('#variation_def').text("+ " + variation_def + "pt");
            $('#total_hp').text("total " + hp + "pt");
            $('#variation_hp').text("+ " + variation_hp + "pt");
            $('#total_spd').text("total " + spd + "pt");
            $('#variation_spd').text("+ " + variation_spd + "pt");
            $('#total_crl').text("total " + crl + "pt");
            $('#variation_crl').text("+ " + variation_crl + "pt");
            $('#ch_status_total').text("残りSP・・・ " + total_sp + "pt");

            localStorage.removeItem('status_json');
            $('#hidden_text').text(" ");


            var func = function () {
                var mychart = new Chart($('#chart'), {
                    type: 'radar',
                    data: {
                        labels: [
                            '力',
                            '防御',
                            '体力',
                            '素早さ',
                            'クリティカル'
                        ],
                        datasets: [{
                            label: 'ステータス',
                            data: [
                                str, def, hp, spd, crl
                            ],
                            backgroundColor: 'rgba(241, 107, 141, 0.5)',
                            borderColor: 'rgba(0, 0, 0, 0.5)',
                            borderWidth: 1,
                            pointBackgroundColor: 'rgba(63,106,177,0.7)',
                        }]
                    },
                    options: {
                        scale: {
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                stepSize: 50,
                            },
                            angleLines: {        // 軸（放射軸）
                                display: true,
                                color: "brack"
                            },
                            gridLines: {         // 補助線（目盛の線）
                                display: true,
                                color: "lime"
                            }
                        }
                    }
                });
            }

            var func_view = function () {
                var mychart_view = new Chart($('#chart_view'), {
                    type: 'radar',
                    data: {
                        labels: [
                            '力',
                            '防御',
                            '体力',
                            '素早さ',
                            'クリティカル'
                        ],
                        datasets: [{
                            label: 'ステータス',
                            data: [
                                str, def, hp, spd, crl
                            ],
                            backgroundColor: 'rgba(241, 107, 141, 0.5)',
                            borderColor: 'rgba(0, 0, 0, 0.5)',
                            borderWidth: 1,
                            pointBackgroundColor: 'rgba(63,106,177,0.7)',
                        }]
                    },
                    options: {
                        scale: {
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                stepSize: 50,
                            },
                            angleLines: {        // 軸（放射軸）
                                display: true,
                                color: "brack"
                            },
                            gridLines: {         // 補助線（目盛の線）
                                display: true,
                                color: "lime"
                            }
                        }
                    }
                });
            }


            func_view();
            func();
        });
    }
}