export default function objectToQueryParams(obj: any): string {
    const params = new URLSearchParams();

    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined ) {
            params.append(key, obj[key]);
        }
    }
    if (params.toString())
        return `?${params.toString()}`
    else return ''
}