import { getData } from './httpRequest';

export const getList = (page,count) => {
    return getData('/app/list',{page,count});
};