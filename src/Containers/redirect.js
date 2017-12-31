let direct = false;

export const redirect = (r = false) =>{
    direct = r;
};

export const getDirect =  () =>direct;