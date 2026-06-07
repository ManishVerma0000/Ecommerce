import Link from 'next/link';

const groups = [
  {
    title: 'About',
    links: [
      ['About Us', '/about'],
      ['Blog', '/blog'],
      ['Careers', '/careers'],
    ],
  },
  {
    title: 'Customer Service',
    links: [
      ['Contact Us', '/contact'],
      ['Help Center', '/help'],
      ['Shipping Info', '/shipping'],
    ],
  },
  {
    title: 'Policies',
    links: [
      ['Privacy Policy', '/privacy'],
      ['Terms of Service', '/terms'],
      ['Returns', '/returns'],
    ],
  },
  {
    title: 'Shop',
    links: [
      ['New Releases', '/new-releases'],
      ['Sale', '/sale'],
      ['Collections', '/collections'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-gray-900 mb-4">{group.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-black">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          <p>&copy; 2026 StepHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
