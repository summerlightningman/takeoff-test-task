import {signIn} from "../http";


describe('login works', () => {
    test('login returns token', async () => {
        await signIn('admin', 'admin').then(resp => expect(resp).toBe('admin'));
    });
})