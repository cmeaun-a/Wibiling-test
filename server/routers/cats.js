import express from 'express'
import axios from 'axios'

import asyncHandler from '../middlewares/asyncHandler'
import verifParams from '../utils/verifParams'

const router = new express.Router()

router.get(
  '/cats',
  asyncHandler(async (req, res) => {
    verifParams(req)
    const { protocol, count, url } = req.query
    const { data } = await axios.get('http://shibe.online/api/cats', {
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
        cats: data.map(cat => (url === 'true' ? { url: cat } : { id: cat })),
      },
    })
  }),
)

export default router
