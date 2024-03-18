
const fetchData = async (url) => {
    try {
        const response = await fetch(url,
            {headers:{ 'Content-Type': 'application/json', 'Accept': 'application/json' }
            }
            )
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default fetchData;
