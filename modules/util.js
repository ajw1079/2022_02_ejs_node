const createError = require('http-errors');

const error = (code, msg) => {
  let message = '알 수 없는 에러입니다. 관리자에게 문의하세요.'
  switch(code) {
    case 404:
      message = msg || '파일을 찾을 수 없습니다.'
      break;
    case 401:
      message = msg || '사용자 인증이 처리되지 않았습니다.'
      break;
    case 403:
      message = msg || '허가되지 않은 접근입니다.'
      break;
    case 500:
      message = msg || '서버 내부 에러입니다. 잠시 후 다시 시도해 주세요.'
      break;      
    default:
      break;
  }

  return createError(code || 500, message || 'Iternal Server Error')
}

module.exports = { error }