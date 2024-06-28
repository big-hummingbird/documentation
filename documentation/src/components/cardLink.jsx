import Link from '@docusaurus/Link';

const CardLink = ({ title, message, href, icon }) => {
  return (
    <div className="flex space-y-2 p-4 bg-gray-50 rounded-lg cursor-pointer hover:shadow-lg">
      <Link to={href} className="hover:no-underline text-black">
        <h1 className="text-lg">
          {title}
        </h1>
        <h3 className="text-xs text-gray-300">
          {message}
        </h3>
      </Link>
    </div>
  );
};

export default CardLink;
