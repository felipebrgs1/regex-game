export interface Puzzle {
  id: number
  titulo: string
  dica: string
  shouldMatch: string[]
  shouldNotMatch: string[]
}

export const puzzles: Puzzle[] = [
  {
    id: 1,
    titulo: 'Bonjour, lettres!',
    dica: 'Combine apenas as letras minúsculas de "a" a "z". Nada de números!',
    shouldMatch: ['abc', 'hello', 'regex'],
    shouldNotMatch: ['123', 'abc123', 'Hello', ''],
  },
  {
    id: 2,
    titulo: 'Só números, por favor',
    dica: 'Combine sequências que contenham apenas dígitos de 0 a 9.',
    shouldMatch: ['123', '0', '999'],
    shouldNotMatch: ['12a3', 'abc', '3.14'],
  },
  {
    id: 3,
    titulo: 'Obrigatório, senhor(a)',
    dica: 'Combine palavras que começam com a letra "a" (minúscula).',
    shouldMatch: ['abacaxi', 'ave', 'arvore'],
    shouldNotMatch: ['Abacaxi', 'banana', 'casa', '1abc'],
  },
  {
    id: 4,
    titulo: 'Fim de linha',
    dica: 'Combine palavras que terminam com "ção".',
    shouldMatch: ['emoção', 'solução', 'informação'],
    shouldNotMatch: ['casa', 'ação', 'coraçãozinho'],
  },
  {
    id: 5,
    titulo: 'Quantificadores',
    dica: 'Combine palavras com pelo menos 3 letras minúsculas seguidas.',
    shouldMatch: ['abc', 'test', 'regex'],
    shouldNotMatch: ['ab', 'a', '12'],
  },
  {
    id: 6,
    titulo: 'Ou isso, ou aquilo',
    dica: 'Combine palavras que sejam "gato" OU "cachorro".',
    shouldMatch: ['gato', 'cachorro'],
    shouldNotMatch: ['gata', 'cachorrinho', 'peixe'],
  },
  {
    id: 7,
    titulo: 'Grupo capturado',
    dica: 'Combine strings no formato "abc" seguido de "123" — exatamente 3 letras e 3 dígitos.',
    shouldMatch: ['abc123', 'xyz999', 'lol420'],
    shouldNotMatch: ['abc12', 'ab1234', '123abc'],
  },
  {
    id: 8,
    titulo: 'Espaço complicado',
    dica: 'Combine palavras que contenham pelo menos um espaço.',
    shouldMatch: ['olá mundo', 'bom dia', 'a b'],
    shouldNotMatch: ['olámundo', 'bomdia', 'abc'],
  },
  {
    id: 9,
    titulo: 'Email simples',
    dica: 'Combine endereços de email no formato texto@texto.com — letras, um "@", letras, ".com".',
    shouldMatch: ['user@example.com', 'test@domain.com', 'a@b.com'],
    shouldNotMatch: ['user@.com', '@domain.com', 'user@domain', 'user@domain.org'],
  },
  {
    id: 10,
    titulo: 'Mestre dos Quantificadores',
    dica: 'Combine strings que tenham entre 5 e 10 letras minúsculas (apenas letras).',
    shouldMatch: ['abcde', 'abcdefghij', 'palavra'],
    shouldNotMatch: ['abcd', 'abcdefghijk', 'abc1', ''],
  },
]

export function usePuzzles() {
  return { puzzles }
}