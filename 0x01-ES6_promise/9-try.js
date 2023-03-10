export default function guardrail(mathFunction) {
  const queque = [];

  try {
    queque.push(mathFunction());
  } catch (err) {
    queque.push(`Error: ${err.message}`);
  } finally {
    queque.push('Guardrail was processed');
  }

  return queque;
}
