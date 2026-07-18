'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-16 flex flex-col justify-center', className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-semibold tracking-[0.3em] text-primary uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className='flex flex-col sm:flex-row items-center sm:justify-end gap-6 sm:gap-0'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[350px] sm:h-[400px] lg:h-[500px] w-full sm:w-[300px] lg:w-[360px] shrink-0 overflow-hidden rounded-3xl sm:rounded-none',
            isPositionRight && 'sm:order-1'
          )}
        >
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative sm:-left-8 z-20 flex w-full sm:w-[calc(100%-300px)] lg:w-[calc(100%-350px)] flex-col gap-8 sm:gap-14 px-4 sm:px-0 text-center sm:text-left items-center sm:items-start',
            isPositionRight && 'sm:left-8 sm:items-end sm:text-right'
          )}
        >
          <div>
            <p className='text-5xl leading-[1.1] font-light tracking-tight text-text-main font-serif'>
              {firstName}
              <br />
              <span className='font-normal italic text-primary'>{lastName}</span>
            </p>
          </div>

          <div className={cn('flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start', isPositionRight && 'sm:justify-end')}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary/40 transition-colors duration-300 hover:border-primary hover:bg-primary text-primary hover:text-white',
                isPositionRight && 'sm:order-1'
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  'transition-all duration-300 group-hover:-rotate-45 text-primary group-hover:text-white',
                  isPositionRight && 'sm:rotate-180 group-hover:rotate-225'
                )}
              />
            </motion.div>

            <div className='w-full sm:w-[60%] lg:w-[40%] text-center sm:text-left'>
              <p
                className={cn(
                  'text-sm leading-[1.8] text-text-muted font-medium',
                  isPositionRight && 'sm:text-right'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
