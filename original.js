function c(digits){
    var length = (digits / 4 + 1) * 14,
        out = "",
        a = [],
        b = 0,
        c = length,
        d = 0,
        e = 0,
        f = 10000,
        g = 0,
        h = 0;
    for(;a.length !== length;a.push(0));
    for(;(b = c -= 14) > 0;){
        for(;--b > 0;){
            d *= b;
            if(h === 0){
                d += 2000 * f;
            } else {
                d += a[b] * f;
            }
            g = b + b - 1;
            a[b] = ((d % g) + g) % g;
            d = Math.floor(d / g);
        }
        h = Math.floor(e + d / f);
        out += h;
        h = h.length;
        d = e = ((d % f) + f) % f;
    }
    return out;
}
