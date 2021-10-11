import axios, { AxiosResponse } from 'axios';

export const requestTempleteData = async (templeteId: string) => {
  const url = `http://3.138.247.170/api/wedding/detail-public/${templeteId}`;
  try {
    const { data } = await axios.get(url);

    // return data.data as typeof mockTempleteData;
    // const { data } = await getMockData;
    // const { response } = data;
    // return response as typeof mockTempleteData;
    return data.data;
    // return mockTempleteData;
  } catch (e) {
    console.log(e);
  }
};
