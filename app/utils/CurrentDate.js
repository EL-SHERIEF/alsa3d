export default function CurrentDate() {
    const today = new Date().toISOString();
    return <>{today}</>;
  }