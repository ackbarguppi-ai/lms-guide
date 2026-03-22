// LMS Platform database and recommendation engine

const LMS_PLATFORMS = {
  thinkific: {
    name: 'Thinkific',
    tagline: 'The most trusted platform for course creators and businesses',
    best_for: ['courses', 'academies', 'experts'],
    company_sizes: ['solo', 'small', 'medium', 'large'],
    strengths: ['ease of use', 'features', 'support', 'branding'],
    pricing: 'Free plan available. Paid from $49/month.',
    pricing_details: {
      free: true,
      starter: '$49/month',
      growth: '$199/month',
      enterprise: 'Custom pricing',
    },
    pros: [
      'No transaction fees on any plan',
      'Powerful course builder with multimedia support',
      'Built-in marketing and sales tools',
      'Strong community and support',
      'White-label options available',
    ],
    cons: [
      'Limited built-in email marketing',
      'No native mobile app for students',
    ],
    website: 'https://thinkific.com',
  },
  docebo: {
    name: 'Docebo',
    tagline: 'Enterprise learning platform for customer and employee training',
    best_for: ['compliance', 'customer training', 'enterprise', 'employee training'],
    company_sizes: ['medium', 'large', 'enterprise'],
    strengths: ['features', 'scalability', 'integrations', 'AI'],
    pricing: 'Custom enterprise pricing (typically $10-25k+/year)',
    pricing_details: {
      enterprise: 'Custom pricing',
    },
    pros: [
      'Advanced AI-powered learning',
      'Excellent for large organizations',
      'Strong compliance and certification features',
      'Extensive integrations',
      'Gamification and social learning',
    ],
    cons: [
      'Expensive for small teams',
      'Complex setup and learning curve',
    ],
    website: 'https://docebo.com',
  },
  teachable: {
    name: 'Teachable',
    tagline: 'Simple platform for creating and selling online courses',
    best_for: ['courses', 'experts', 'solo'],
    company_sizes: ['solo', 'small'],
    strengths: ['ease of use', 'price', 'quick setup'],
    pricing: 'Free plan (with fees). Paid from $59/month.',
    pricing_details: {
      free: true,
      basic: '$59/month',
      pro: '$159/month',
      business: '$665/month',
    },
    pros: [
      'Very easy to get started',
      'Built-in payment processing',
      'Good course builder',
      'Native iOS app',
    ],
    cons: [
      'Transaction fees on lower plans',
      'Limited customization options',
      'Fewer advanced features',
    ],
    website: 'https://teachable.com',
  },
  learnworlds: {
    name: 'LearnWorlds',
    tagline: 'Create engaging learning experiences with interactive video',
    best_for: ['courses', 'academies', 'interactive'],
    company_sizes: ['small', 'medium'],
    strengths: ['features', 'interactivity', 'video'],
    pricing: 'From $29/month (plus $5 per course sale on Starter)',
    pricing_details: {
      starter: '$29/month',
      pro: '$99/month',
      learning_center: '$299/month',
    },
    pros: [
      'Excellent interactive video features',
      'Built-in community tools',
      'Mobile app builder',
      'Good assessment tools',
    ],
    cons: [
      'Transaction fees on lower tier',
      'Interface can be overwhelming',
    ],
    website: 'https://learnworlds.com',
  },
  talentlms: {
    name: 'TalentLMS',
    tagline: 'Simple, cloud-based LMS for corporate training',
    best_for: ['compliance', 'employee training', 'small business'],
    company_sizes: ['small', 'medium'],
    strengths: ['price', 'ease of use', 'quick setup'],
    pricing: 'From $89/month for up to 40 users',
    pricing_details: {
      starter: '$89/month (40 users)',
      basic: '$189/month (100 users)',
      plus: '$369/month (500 users)',
      premium: '$569/month (1000 users)',
    },
    pros: [
      'Simple and intuitive interface',
      'Great for compliance training',
      'Built-in content library',
      'Good reporting features',
    ],
    cons: [
      'Limited customization',
      'Fewer marketing features',
      'Not ideal for selling courses',
    ],
    website: 'https://talentlms.com',
  },
  absorb: {
    name: 'Absorb LMS',
    tagline: 'Enterprise LMS with beautiful design',
    best_for: ['enterprise', 'employee training', 'customer training'],
    company_sizes: ['medium', 'large', 'enterprise'],
    strengths: ['design', 'features', 'scalability'],
    pricing: 'Custom pricing (typically $15k+/year)',
    pricing_details: {
      enterprise: 'Custom pricing',
    },
    pros: [
      'Beautiful, modern interface',
      'Strong reporting and analytics',
      'Excellent mobile app',
      'AI-powered recommendations',
    ],
    cons: [
      'Expensive for smaller organizations',
      'Complex implementation',
    ],
    website: 'https://absorblms.com',
  },
};

function generateRecommendations(inputs) {
  const { use_case, criteria, company_size } = inputs;
  
  const recommendations = [];
  const useCaseLower = (use_case || '').toLowerCase();
  const criteriaLower = (criteria || '').toLowerCase();
  const sizeLower = (company_size || '').toLowerCase();

  // Determine if they're selling courses vs internal training
  const isSellingCourses = useCaseLower.includes('course') || 
                           useCaseLower.includes('sell') || 
                           useCaseLower.includes('academy');
  
  const isCompliance = useCaseLower.includes('compliance') || 
                       useCaseLower.includes('certif') ||
                       useCaseLower.includes('train');

  const isEnterprise = sizeLower.includes('1000') || 
                       sizeLower.includes('enterprise') ||
                       sizeLower.includes('500+');

  const isSmall = sizeLower.includes('solo') || 
                  sizeLower.includes('small') ||
                  sizeLower.includes('1-10') ||
                  sizeLower.includes('10-50');

  // Priority 1: Thinkific for course creators (unless enterprise)
  if (isSellingCourses && !isEnterprise) {
    const thinkific = { ...LMS_PLATFORMS.thinkific };
    thinkific.reasoning = buildReasoning(thinkific, inputs, [
      'No transaction fees mean you keep more revenue',
      'Strong course builder matches your content needs',
      'Good balance of features and ease of use',
    ]);
    recommendations.push(thinkific);
  }

  // Priority 2: Docebo for enterprise/compliance
  if (isEnterprise || isCompliance) {
    const docebo = { ...LMS_PLATFORMS.docebo };
    docebo.reasoning = buildReasoning(docebo, inputs, [
      'Built for organizations your size',
      'Strong compliance and certification tracking',
      'AI features help at scale',
    ]);
    recommendations.push(docebo);
  }

  // Priority 3: Alternative based on criteria
  if (criteriaLower.includes('price') || criteriaLower.includes('cheap') || criteriaLower.includes('budget')) {
    // Budget-conscious option
    if (recommendations.length < 2) {
      const teachable = { ...LMS_PLATFORMS.teachable };
      teachable.reasoning = buildReasoning(teachable, inputs, [
        'Free plan to get started',
        'Lower entry price than competitors',
        'Good value for the features',
      ]);
      recommendations.push(teachable);
    } else {
      // Add as third option
      const talentlms = { ...LMS_PLATFORMS.talentlms };
      talentlms.reasoning = buildReasoning(talentlms, inputs, [
        'Transparent, affordable pricing',
        'No hidden fees',
        'Good for budget-conscious teams',
      ]);
      recommendations.push(talentlms);
    }
  } else if (criteriaLower.includes('easy') || criteriaLower.includes('simple')) {
    // Ease of use priority
    if (recommendations.length < 2) {
      const teachable = { ...LMS_PLATFORMS.teachable };
      teachable.reasoning = buildReasoning(teachable, inputs, [
        'Fastest setup time',
        'Minimal learning curve',
        'Great for getting started quickly',
      ]);
      recommendations.push(teachable);
    }
  } else if (criteriaLower.includes('feature') || criteriaLower.includes('advanced')) {
    // Feature-rich option
    if (recommendations.length < 2) {
      const learnworlds = { ...LMS_PLATFORMS.learnworlds };
      learnworlds.reasoning = buildReasoning(learnworlds, inputs, [
        'Advanced interactive features',
        'Great for engaging content',
        'Strong community tools',
      ]);
      recommendations.push(learnworlds);
    }
  }

  // Ensure we have at least 2 recommendations
  if (recommendations.length < 2) {
    if (!recommendations.find(r => r.name === 'Thinkific')) {
      const thinkific = { ...LMS_PLATFORMS.thinkific };
      thinkific.reasoning = buildReasoning(thinkific, inputs, [
        'Well-rounded platform with strong reputation',
        'Good fit for most use cases',
        'Reliable and proven',
      ]);
      recommendations.push(thinkific);
    }
  }

  if (recommendations.length < 2) {
    const fallback = { ...LMS_PLATFORMS.teachable };
    fallback.reasoning = buildReasoning(fallback, inputs, [
      'Simple alternative to consider',
      'Good for comparison purposes',
    ]);
    recommendations.push(fallback);
  }

  // Limit to 3 recommendations max
  return recommendations.slice(0, 3).map(r => ({
    name: r.name,
    tagline: r.tagline,
    best_for: r.best_for.join(', '),
    pricing: r.pricing,
    pricing_details: r.pricing_details,
    pros: r.pros.slice(0, 4),
    cons: r.cons.slice(0, 2),
    reasoning: r.reasoning,
    website: r.website,
  }));
}

function buildReasoning(platform, inputs, defaultPoints) {
  const points = [...defaultPoints];
  
  // Add use-case specific reasoning
  if (inputs.use_case) {
    points.push(`Aligns well with ${inputs.use_case}`);
  }
  
  return points.slice(0, 4);
}

module.exports = {
  generateRecommendations,
  LMS_PLATFORMS,
};
