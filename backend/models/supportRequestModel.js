



import mongoose from 'mongoose';

const supportRequestSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    deviceType: {
      type: String,
      required: true,
    },
    issueSummary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'scheduled', 'in-progress', 'resolved'],
      default: 'pending',
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'],
      default: 'low',
    },
    scheduleDate: {
      type: Date,
    },
    assignedTechnician: {
      type: String,
    },
    notes: {
      type: String,
    },
    requiresOnSite: {
      type: Boolean,
      default: false,
    },
    spareParts: [{
      partId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SparePart'
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }],
    estimatedCost: {
      parts: {
        type: Number,
        default: 0
      },
      labor: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      }
    },
    quote: {
      amount: {
        type: Number,
      },
      details: {
        type: String,
      },
      date: {
        type: Date,
      }
    }
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to automatically set priority based on age
supportRequestSchema.pre('save', function(next) {
  if (this.isNew) {
    // Don't modify priority for new requests - let admin set it
    next();
    return;
  }

  const ageInDays = (Date.now() - this.createdAt) / (1000 * 60 * 60 * 24);
  
  // Only update priority if admin hasn't manually set it
  if (!this.isModified('priority')) {
    if (ageInDays >= 5) {
      this.priority = 'high';
    } else if (ageInDays >= 3) {
      this.priority = 'medium';
    } else {
      this.priority = 'low';
    }
  }

  next();
});

const SupportRequest = mongoose.model('SupportRequest', supportRequestSchema);

export default SupportRequest;