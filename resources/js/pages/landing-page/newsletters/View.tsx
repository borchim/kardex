import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

interface ViewProps {
    newsletter: any;
}

export default function View({ newsletter }: ViewProps) {
    const { t } = useTranslation();

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            'active': 'bg-green-100 text-green-800',
            'unsubscribed': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const formatDate = (dateString: string) => {
        return window.superAdminSettings?.formatDateTime(dateString, true) || 
               window.appSettings?.formatDateTime(dateString, true) || 
               new Date(dateString).toLocaleDateString();
    };

    return (
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('Newsletter Details')}</DialogTitle>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Email')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{newsletter.email}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Status')}</label>
                        <div className="bg-gray-50 p-2 rounded">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${getStatusColor(newsletter.status)}`}>
                                {newsletter.status?.charAt(0).toUpperCase() + newsletter.status?.slice(1) || '-'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
}
