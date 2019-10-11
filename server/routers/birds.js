import express from 'express'
import axios from 'axios'

import asyncHandler from '../middlewares/asyncHandler'
import verifParams from '../utils/verifParams'

const router = new express.Router()

router.get(
  '/birds',
  asyncHandler(async (req, res) => {
    verifParams(req)
    const { protocol, count, url } = req.query
    const { data } = await axios.get('http://shibe.online/api/birds', {
      params: {
        httpsUrls: protocol === 'https',
        count: count || 1,
        urls: url || true,
      },
    })
    res.json({
      type: 'success',
      code: 200,
      total: data.length,
      data: {
        birds: data.map(bird =>
          url === 'true' ? { url: bird } : { id: bird },
        ),
      },
    })
  }),
)

export default router
