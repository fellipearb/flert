const FeatureCard = ({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) => {
    return (
        <div className="bg-pink-400 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-200">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="font-semibold text-xl mb-3 text-white font-myriad">
                {title}
            </h3>
            <p className="text-sm text-pink-100 font-myriad font-light">{description}</p>
        </div>
    );
};

const Features = () => {
    const features = [
        {
            icon: "📍",
            title: "Ative sua localização",
            description: "O app detecta quem está ao seu lado usando rote GPS",
        },
        {
            icon: "💌",
            title: "Envie um flert",
            description: "O app detecta quem está ao seu lado usando rote GPS",
        },
        {
            icon: "💕",
            title: "Match mútuo",
            description: "O app detecta quem está ao seu lado usando rote GPS",
        },
        {
            icon: "💬",
            title: "Converse",
            description: "O app detecta quem está ao seu lado usando rote GPS",
        },
    ];

    return (
        <section className="w-full bg-purple-700 py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-16 font-myriad">
                    Como funciona
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
