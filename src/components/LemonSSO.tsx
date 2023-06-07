import { Avatar, Button, Divider, NoSsr, Paper, Stack, Typography } from '@mui/material';
import GoogleSvgIcon from './icons/GoogleSvgIcon.tsx';

export interface LemonSSOProps {
  // example : https://service.lemondouble.com/home
  redirectUrl?: string;
}
export function LemonSSO(props: LemonSSOProps) {
  const googleLoginUrl = new URL('https://auth.lemondouble.com/api/oauth2/google/login');
  if (props.redirectUrl) {
    googleLoginUrl.searchParams.append('redirect_url', props.redirectUrl);
  }

  return (
    <NoSsr>
      <Paper
        sx={{
          width: '400px',
          padding: '32px',
        }}
      >
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Avatar alt="Site Logo" src="/lemon-logo.webp" />
            <Typography variant="h6">Lemon Toolbox</Typography>
          </Stack>
          <Typography variant="body1">계속 하려면 로그인 해 주세요.</Typography>
          <Typography variant="caption">로그인 정보는 유저 식별 이외에 아무 곳에도 사용되지 않습니다.</Typography>
          <Divider sx={{ width: '100%' }} />
          <Button variant="outlined" startIcon={<GoogleSvgIcon />} href={googleLoginUrl.toString()}>
            Google Id로 계속하기
          </Button>
        </Stack>
      </Paper>
    </NoSsr>
  );
}
