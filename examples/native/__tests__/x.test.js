import {database} from '../index';

describe('', () => {
  test('should first', async () => {
    const usersFromDb = await database.get(posts).query().fetch();
    console.log(usersFromDb);
  });
});
