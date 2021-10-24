/// <reference lib="webworker" />


addEventListener('message', ({ data }) => {

  const canvas = data.payload
  const ctx = canvas.getContext('2d')
  const text = 'hello from offscreen'
  ctx.font = '30pt sans-serif';

  // CONTEXT_NAME.font='30pt san-serif'
  postMessage(text, data);
});

