import calculerMoyenne from '../src/average';

test('Calculer la moyenne du tableau', () => {
    const tableau = [1, 2, 3, 4, 5];
  
    expect(calculerMoyenne(tableau)).toBe(3);
});