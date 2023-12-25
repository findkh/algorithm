function solution(polynomial) {
  const terms = polynomial.split('+').map(term => term.trim());

  const coefficients = {};

  terms.forEach(term => {
    if (term.includes('x')) {
      const [coefficient, variable] = term.split('x').map(part => part.trim());
      const coef = coefficient === '' ? 1 : parseInt(coefficient, 10);
      coefficients['x'] = (coefficients['x'] || 0) + coef;
    } else {
      coefficients['constant'] = (coefficients['constant'] || 0) + parseInt(term, 10);
    }
  });

  const resultTerms = [];

  if (coefficients['x'] !== undefined && coefficients['x'] !== 0) {
    resultTerms.push(coefficients['x'] === 1 ? 'x' : `${coefficients['x']}x`);
  }

  if (coefficients['constant'] !== undefined && coefficients['constant'] !== 0) {
    resultTerms.push(coefficients['constant'].toString());
  }

  const result = resultTerms.join(' + ');

  return result || '0';
}