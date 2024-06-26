// eventsData.js
export const events = [
  {
    id: 1,
    event: 'Work',
    percentage: 25,
    description: 'This event highlights significant milestones in your professional career, from your first job to your retirement party.',
    subEvents: [
      { id: 1.1, type: 'First job', percentage: 15 },
      { id: 1.2, type: 'Stable job', percentage: 32 },
      { id: 1.3, type: 'Promotion', percentage: 40 },
      { id: 1.4, type: 'Retirement Party', percentage: 80 }
    ]
  },
  {
    id: 2,
    event: 'Love',
    percentage: 35,
    description: 'This event captures the romantic milestones in your life, from your first date to your wedding.',
    subEvents: [
      { id: 2.1, type: 'First Date', percentage: 12 },
      { id: 2.2, type: 'Sex', percentage: 18 },
      { id: 2.3, type: 'Engagement', percentage: 27 },
      { id: 2.4, type: 'Wedding', percentage: 30 },
    ]
  },
  {
    id: 3,
    event: 'Family',
    percentage: 38,
    description: 'This event focuses on important family moments, from pregnancy to having grandchildren.',
    subEvents: [
      { id: 3.1, type: 'Pregnancy', percentage: 27 },
      { id: 3.2, type: 'Birth', percentage: 28 },
      { id: 3.3, type: 'Pet', percentage: 36 },
      { id: 3.4, type: 'Grandchildren', percentage: 55 }
    ]
  },
  {
    id: 4,
    event: 'Housing',
    percentage: 42,
    description: 'This event covers significant milestones related to housing, from renting to renovating your home.',
    subEvents: [
      { id: 4.1, type: 'Rent', percentage: 20 },
      { id: 4.2, type: 'Purchase', percentage: 35 },
      { id: 4.3, type: 'Renovation', percentage: 50 },
    ]
  }
];
