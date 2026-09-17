function splitIntoSentences(text, locale = 'ru') {
  if (!text || typeof text !== 'string') return [];

  const segmenter = new Intl.Segmenter(locale, { granularity: 'sentence' });
  
  return Array.from(segmenter.segment(text))
    .map(entry => entry.segment.trim())
    .filter(Boolean);
}