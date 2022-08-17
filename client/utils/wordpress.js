const BASE_URL = 'http://lilyweb-agency-2021/wp-json/wp/v2';

export async function getPage(id) {
    const pageRes = await fetch(BASE_URL + `/pages/${id}`);
    const page = await pageRes.json();
    return page;
}

export async function getServices() {
    const servicesRes = await fetch(BASE_URL + '/services?_embed');
    const services = await servicesRes.json();
    return services;
}

export async function getlastProject() {
    const lastProjectRes = await fetch(BASE_URL + '/last-project?_embed');
    const pastProject = await lastProjectRes.json();
    return pastProject;
}

export async function getBrands() {
    const brandsRes = await fetch(BASE_URL + '/brands?_embed');
    const brands = await brandsRes.json();
    return brands;
}

export async function getAchievements() {
    const achievementsRes = await fetch(BASE_URL + '/achievements?_embed');
    const achievements = await achievementsRes.json();
    return achievements;
}

export async function getTeam() {
    const teamRes = await fetch(BASE_URL + '/team?_embed');
    const team = await teamRes.json();
    return team;
}

export async function getPosts() {
    const postsRes = await fetch(BASE_URL + '/posts?_embed');
    const posts = await postsRes.json();
    return posts;
}

export async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}

export async function getProcesses() {
    const processesRes = await fetch(BASE_URL + '/processes?_embed');
    const processes = await processesRes.json();
    return processes;
}

export async function getReviews() {
    const reviewsRes = await fetch(BASE_URL + '/reviews?_embed');
    const reviews = await reviewsRes.json();
    return reviews;
}
