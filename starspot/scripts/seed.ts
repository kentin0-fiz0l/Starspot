import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed predefined groups
    const groups = await prisma.group.createMany({
        data: [
            { name: 'Actors' },
            { name: 'Musicians' },
            { name: 'Athletes' },
        ],
    });

    // Seed predefined celebrities
    const celebrities = await prisma.celebrity.createMany({
        data: [
            { name: 'Celebrity One', groupId: 1 },
            { name: 'Celebrity Two', groupId: 1 },
            { name: 'Celebrity Three', groupId: 2 },
            { name: 'Celebrity Four', groupId: 3 },
        ],
    });

    console.log('Seeding completed:', { groups, celebrities });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });