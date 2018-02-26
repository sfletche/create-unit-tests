function getUnitTest(element) {
  // input { element: 'getName' }
  return `
  describe('${element}', () => {
    it('needs a unit test', () => {
      expect(true).toEqual(false);
    });
  });
`;
}

module.exports = getUnitTest;
