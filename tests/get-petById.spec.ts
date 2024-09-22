import test, { expect } from "@playwright/test";


const petID = 333;
const petName='myDog';

test('POST add a new pet to store', async ({ request }) => {
    const newPet = await request.post(`/v2/pet`,{data:{id:petID,name:petName}});
    expect(newPet.ok()).toBeTruthy();
});

test(`GET pet details with ID:${petID}`,async ({request}) => {
     const response = await request.get(`/v2/pet/${petID}`);
    expect (response.ok()).toBeTruthy();
    // console.log(response.json());
    // expect(response.json()).toContain('myDog');
});