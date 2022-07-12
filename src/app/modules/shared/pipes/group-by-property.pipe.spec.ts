import { GroupByPropertyPipe } from './group-by-property.pipe';

describe('GroupByPropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupByPropertyPipe();
    expect(pipe).toBeTruthy();

    expect(
      JSON.stringify(
        pipe.transform(
          [
            { id: 4323, a: 'iopi' },
            { id: 'fs645', a: 'pote' },
            { id: 4323, a: 'iopi' },
          ],
          'id'
        )
      )
    ).toBe(
      JSON.stringify([
        { id: 4323, a: 'iopi', count: 2 },
        { id: 'fs645', a: 'pote', count: 1 },
      ])
    );
  });
});
