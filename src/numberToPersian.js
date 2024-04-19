export default function numberToPersian(number) {
    var persian = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹"
    };
    number = number.toString().split("");
    var persianNumber = ""
    for (var i = 0; i < number.length; i++) {
        number[i] = persian[number[i]];
    }
    for (var i = 0; i < number.length; i++) {
        persianNumber += number[i];
    }
    return persianNumber;
};