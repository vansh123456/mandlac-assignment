// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

import { subHours, addMinutes } from 'date-fns'

const prisma = new PrismaClient()

async function main() {
  // 1. Create Cameras
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'Ground Floor' },
      { name: 'Vault', location: 'Back Room' },
      { name: 'Entrance', location: 'Main Door' },
    ],
  })

  const allCameras = await prisma.camera.findMany()

  // Helper to get random camera ID
  const getRandomCamera = () => allCameras[Math.floor(Math.random() * allCameras.length)]

  const incidentTypes = [
    'Unauthorised Access',
    'Gun Threat',
    'Face Recognised',
    'Traffic Congestion',
  ]

  // 2. Create Incidents
  const now = new Date()

  const incidents = Array.from({ length: 12 }, (_, i) => {
    const start = subHours(now, 24 - i * 2) // spread across 24 hours
    const end = addMinutes(start, 2)

    return {
      type: incidentTypes[i % incidentTypes.length],
      cameraId: getRandomCamera().id,
      tsStart: start,
      tsEnd: end,
      resolved: false,
      thumbnailUrl: `/thumbnails/thumb${(i % 6) + 1}.jpg`, // assume 6 placeholder images
    }
  })

  for (const incident of incidents) {
    await prisma.incident.create({ data: incident })
  }

  console.log(' Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(' Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
