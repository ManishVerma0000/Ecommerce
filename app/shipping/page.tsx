import SimplePage from '../components/SimplePage';

export default function ShippingPage() {
  return <SimplePage title="Shipping Info" description="Standard shipping is free on eligible orders, with faster options available at checkout." items={['Free shipping over $250', 'Express delivery', 'Tracking included']} />;
}
