const BASE_URL = 'http://lilyweb-agency-2021/wp-json/wp/v2';

export async function getPage(id) {
    const pageRes = await fetch(BASE_URL + `/pages/${id}`);
    const page = await pageRes.json();
    return page;
}
