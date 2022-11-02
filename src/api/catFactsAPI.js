export const getNewCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    if (data) return data;
    else return { error: `Couldn't reach the cat-facts API service. Is it down?` };
}