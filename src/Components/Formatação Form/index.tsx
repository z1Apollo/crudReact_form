export const MaskPhone = (value: string) => {
    return value
        .replace(/\D/g, "")           
        .replace(/^(\d{2})(\d)/, "($1) $2") 
        .replace(/(\d{5})(\d)/, "$1-$2")    
        .replace(/(-\d{4})\d+?$/, "$1");    
}

export const MaskCPF = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
}

export const MaskDate = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\/\d{4})\d+?$/, "$1");
}