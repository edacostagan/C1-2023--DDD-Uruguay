export const IsEmptyOrNull = (value: boolean | string | number | bigint | Date | [] | object | null | undefined ): boolean => {

    if(typeof value === 'string') return value.trim() === '' ? true: false;

    else if( value === null || value === undefined ) return true;

    else if( typeof value === 'object' ) return Object.keys(value).length === 0 ? true :  false;

    return false;
}