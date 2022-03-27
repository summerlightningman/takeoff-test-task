import {getContactList, signIn} from "../http";


describe('login works', () => {
    test('login returns token', async () => {
        await signIn('admin', 'admin').then(resp => expect(resp).toBe('admin'));
    });
});

describe('getUserData works', () => {
    test('getUserData returns array with name and list of contacts', async () => {
        await getContactList('admin').then(resp => expect(resp).toBe(['admin', [
            {
                "id": 1,
                "name": "contact1",
                "tel": "8-800-555-3535"
            },
            {
                "id": 2,
                "name": "contact2",
                "tel": "1-234-567-8901"
            }
        ]]))
    })
})