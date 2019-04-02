function solution(a,b) {
    var result = 0
    var small = 0
    var large = 0
    if(a<b) {
        small=a; large=b;
    } else {
        small=b; large=a;
    } for (var i=small;i<=large;i++) {
        result+=i;
    }
    return result;
}