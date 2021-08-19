import { th } from '../../../src'

describe('utils/theme/th', () => {
  describe('color', () => {
    it('should return the correct value', () => {
      expect(th.color('amber.100')).toBe('#fef3c7')
    })
    it('should return the fallback when value not found', () => {
      expect(th.color('not.found', '#000')).toBe('#000')
    })
  })
  describe('border', () => {
    it('should return the correct value', () => {
      expect(th.border('md')).toBe('4px solid')
    })
  })
  describe('letterSpacing', () => {
    it('should return the correct value', () => {
      expect(th.letterSpacing('widest')).toBe('0.1em')
    })
  })
  describe('font', () => {
    it('should return the correct value', () => {
      expect(th.font('mono')).toBe(`SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`)
    })
  })
  describe('fontSize', () => {
    it('should return the correct value', () => {
      expect(th.fontSize('2xl')).toBe('1.5rem')
    })
  })
  describe('fontWeight', () => {
    it('should return the correct value', () => {
      expect(th.fontWeight('bold')).toBe(700)
    })
  })
  describe('lineHeight', () => {
    it('should return the correct value', () => {
      expect(th.lineHeight('none')).toBe('1')
    })
  })
  describe('radius', () => {
    it('should return the correct value', () => {
      expect(th.radius('2xl')).toBe('1rem')
    })
  })
  describe('shadow', () => {
    it('should return the correct value', () => {
      expect(th.shadow('base')).toBe('0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)')
    })
  })
  describe('zIndex', () => {
    it('should return the correct value', () => {
      expect(th.zIndex('modal')).toBe(1400)
    })
  })
  describe('space', () => {
    it('should return the correct value', () => {
      expect(th.space(8)).toBe('2rem')
    })
  })
})
