export async function getCurso() {
    const res = await fetch(`${process.env.API_URL_DEV}/course?populate=image`)
    return await res.json()
}