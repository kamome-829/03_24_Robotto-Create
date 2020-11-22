
// *** ライフ変更処理 ***
function my_alterLife(value) {
    // lifeの値を算出する
    my_life += value
    if (my_life <= 0) {
        // 算出の結果 0 以下になった場合
        my_life = 0
        // 0.3秒後に光部分を非表示にする
        setTimeout(function () {
            my_lifeMark.style.visibility = 'hidden'
        }, 300)
    } else {
        // 算出の結果 100 を超過した場合
        if (my_life > 100) {
            my_life = 100
        }
        // 光部分を表示する
        my_lifeMark.style.visibility = 'visible'
    }
    // スタイル(幅)を更新する
    my_lifeBar.style.width = my_life + "%"
}


function enemy_alterLife(value) {
    // lifeの値を算出する
    enemy_life += value
    if (enemy_life <= 0) {
        // 算出の結果 0 以下になった場合
        enemy_life = 0
        // 0.3秒後に光部分を非表示にする
        setTimeout(function () {
            enemy_lifeMark.style.visibility = 'hidden'
        }, 300)
    } else {
        // 算出の結果 100 を超過した場合
        if (enemy_life > 100) {
            enemy_life = 100
        }
        // 光部分を表示する
        enemy_lifeMark.style.visibility = 'visible'
    }
    // スタイル(幅)を更新する
    enemy_lifeBar.style.width = enemy_life + "%"
}


function enemy_attack(ema, emc, myd, mys, myh) {
    let ma = Math.random();
    let ma2 = Math.random();
    let total = 0;
    let cr = 0
    if (mys < ma) {
        if (emc > ma2) {
            ema *= 2;
            cr = 1;
        }
        myd = 1 - myd;
        myh = 1 - myh / 2000;
        total = ema * myd * myh;
        my_alterLife(-total);
    }
    console.log(myh);
    console.log(total);
    if (total == 0) {
        $(".text_explanation").text("自分は敵の攻撃をよけた！！");
    } else if (cr == 1) {
        $(".text_explanation").text("会心の一撃！！　自分は" + total + "ダメージを受けた");
    } else {
        $(".text_explanation").text("自分は" + total + "ダメージを受けた");
    }
    cr = 0;
}

function my_attack(mya, myc, emd, ems, emh) {
    let ma = Math.random();
    let ma2 = Math.random();
    let total = 0;
    let cr = 0;
    if (ems < ma) {
        if (myc > ma2) {
            mya *= 2;
            cr = 1;
        }
        emd = 1 - emd;
        emh = 1 - emh / 2000;
        total = mya * emd * emh;
        enemy_alterLife(-total);
    }
    console.log(emh);
    console.log(total);
    if (total == 0) {
        $(".text_explanation").text("敵は自分の攻撃をよけた！！");
    } else if (cr == 1) {
        $(".text_explanation").text("会心の一撃！！　敵は" + total + "ダメージを受けた");
    } else {
        $(".text_explanation").text("敵は" + total + "ダメージを受けた");
    }
    cr = 0;
}



function my_counter() {
    my_str += 5;
    my_def += 5 / 200;
    my_spd += 5 / 200;
    my_crl += 5 / 200;
    $(".text_explanation").text("自分は全ステータスを5上げた");
}


function enemy_counter() {
    enemy_str += 5;
    enemy_spd += 5 / 200;
    enemy_def += 5 / 200;
    enemy_crl += 5 / 200;
    $(".text_explanation").text("敵は全ステータスを5上げた");
}


function my_item() {
    let total = 10;
    enemy_alterLife(-total);
    $(".text_explanation").text("敵は" + total + "ダメージを受けた");
}


function enemy_item() {
    let total = 10;
    my_alterLife(-total);
    $(".text_explanation").text("自分は" + total + "ダメージを受けた");
}


function my_heal() {
    let total = 15;
    my_alterLife(total);
    $(".text_explanation").text("自分は体力を" + total + "回復した");
}


function enemy_heal() {
    let total = 15;
    enemy_alterLife(total);
    $(".text_explanation").text("敵は体力を" + total + "回復した");
}



function enemy_strong(ema, emc, myd, mys, myh) {
    let ma = Math.random();
    let ma2 = Math.random();
    let total = 0;
    let cr = 0
    if (mys < ma) {
        if (emc > ma2) {
            ema *= 2;
            cr = 1;
        }
        myd = 1 - myd;
        myh = 1 - myh / 2000;
        total = ema * myd * myh * 1.5;
        my_alterLife(-total);
    }
    console.log(myh);
    console.log(total);
    if (total == 0) {
        $(".text_explanation").text("自分は敵の必殺技をよけた！！");
    } else if (cr == 1) {
        $(".text_explanation").text("必殺技！さらに会心の一撃！！　自分は" + total + "ダメージを受けた  特大ダメージ！！");
    } else {
        $(".text_explanation").text("自分は" + total + "ダメージを受けた  大ダメージ！！");
    }
    cr = 0;
}

function my_strong(mya, myc, emd, ems, emh) {
    let ma = Math.random();
    let ma2 = Math.random();
    let total = 0;
    let cr = 0;
    if (ems < ma) {
        if (myc > ma2) {
            mya *= 2;
            cr = 1;
        }
        emd = 1 - emd;
        emh = 1 - emh / 2000;
        total = mya * emd * emh * 1.5;
        enemy_alterLife(-total);
    }
    console.log(emh);
    console.log(total);
    if (total == 0) {
        $(".text_explanation").text("敵は自分の必殺技をよけた！！");
    } else if (cr == 1) {
        $(".text_explanation").text("必殺技！会心の一撃！！　敵は" + total + "ダメージを受けた  特大ダメージ！！");
    } else {
        $(".text_explanation").text("敵は" + total + "ダメージを受けた  大ダメージ！！");
    }
    cr = 0;
}
