interface MetricProps {
  label: string;
  value: string;
  context: string;
}

export function Metric({ label, value, context }: MetricProps) {
  return (
    <article className="metric">
      <p className="metric__label">{label}</p>
      <strong className="metric__value">{value}</strong>
      <p className="metric__context">{context}</p>
    </article>
  );
}
