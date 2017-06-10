describe('ArithmeticService', () => {
  /**
   * @type {ArithmeticService}
   */
  let arithmetic;

  beforeEach(module('arithmetic'));

  beforeEach(inject(($injector) => {
    arithmetic = $injector.get('arithmetic');
  }));

  it('should be injected correctly with Babel', () => {
    expect(arithmetic).toBeTruthy();
  });

  it('should do some additions', () => {
    expect(arithmetic.add(1, 1)).toBe(2);
    expect(arithmetic.add(1.1, 1.1)).toBe(2.2);
    expect(arithmetic.add(-1, 1)).toBe(0);
    expect(arithmetic.add(-1.1, 1.1)).toBe(0);
  });

  it('should do some subtractions', () => {
    expect(arithmetic.subtract(1, 1)).toBe(0);
    expect(arithmetic.subtract(1.1, 1.1)).toBe(0);
    expect(arithmetic.subtract(-1, 1)).toBe(-2);
    expect(arithmetic.subtract(-1.1, 1.1)).toBe(-2.2);
  });

  it('should do some multiplications', () => {
    expect(arithmetic.multiply(1, 2)).toBe(2);
    expect(arithmetic.multiply(2, 0)).toBe(0);
    expect(arithmetic.multiply(-1, 2)).toBe(-2);
    expect(arithmetic.multiply(-1, 0)).toBe(0);
  });

  it('should do some divisions', () => {
    expect(arithmetic.divide(2, 1)).toBe(2);
    expect(arithmetic.divide(2, 0)).toBe(Infinity);
    expect(arithmetic.divide(-2, 1)).toBe(-2);
    expect(arithmetic.divide(-2, 0)).toBe(-Infinity);
  });
});
