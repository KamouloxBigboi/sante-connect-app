const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

	id: { 
    type: String,  
  },

	type: { type: String, 
    required: true, 
    enum: ['post', 
           'comment'] 
  },

	post_uid: { type: String, 
    required: true 
  },

	content: { type: String, 
    required: false 
  },

	author_id: { type: Number, 
    required: true 
  },

	timestamp: { type: Date,
    default: Date.now, 
    required: true 
  },

	vote_count: { type: Number, 
    required: false
  },
  
	comment_count: { type: Number, 
    required: false
  },

	parent_id: { type: String, 
    required: false 
  },

	votes: [
		{
			vote_id: { 
        type: String
      },
			voted_user_id: { 
        type: Number, 
        required: true 
      },
			timestamp: { 
        type: String, 
        required: true 
      },
		},
	],
})

module.exports = mongoose.model("Posts", PostSchema);