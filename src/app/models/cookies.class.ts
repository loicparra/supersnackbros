export class Cookies {
    values: Array<{name: string, value: string}> = [];
    constructor() {
        const cookies = decodeURIComponent(document.cookie).split('; ');
        for (const cookie of cookies) {
            const pair = cookie.split('=');
            this.values.push({name: pair[0], value: pair[1]});
        }
    }

    get(cname) {
        for (const value of this.values) {
            if (value.name === cname) {
                return value.value;
            }
        }
        return null;
    }

    set(cname, cvalue) {
        const d = new Date();
        d.setTime(d.getTime() + 4 * 60 * 60 * 1000);
        document.cookie = cname + '=' + cvalue + ';expires=' + d.toUTCString() + ';path=/';
        this.values.push({name: cname, value: cvalue});
    }
}
