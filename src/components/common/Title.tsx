function Title({
  title,
  description,
  size = 'large',
  as = 'h1',
}: {
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  as?: 'h1' | 'h2' | 'h3';
}) {
  const Head = as;

  return (
    <div className="flex flex-col gap-2">
      <Head
        className={`font-bold text-${size === 'large' ? '3xl' : size === 'medium' ? '2xl' : 'xl'}`}
      >
        {title}
      </Head>
      {description && (
        <p
          className={`text-gray-400 ${size === 'large' ? '' : size === 'medium' ? 'text-sm' : 'text-xs'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Title;
