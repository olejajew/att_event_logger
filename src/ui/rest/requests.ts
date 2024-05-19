

export const postDateRange = async (startDate: string, endDate: string): Promise<string> => {
    try {
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: { startDate, endDate } }),
        });

        if (!response.ok) {
            return "https://www.google.com";
        }
        console.log('Download initiated successfully');
        return response.text();
    } catch (error) {
        console.error('Error during fetch:', error);
        return "https://www.google.com";
    }
};